import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Labels from '@/components/containers/labels';
import TextArea from '@/components/containers/textArea';
import { Friends } from '../models/friends';
import * as FriendsApi from "../network/friends_api";
import defaultImage2 from "../assets/defaultImage2.png"

interface EditFriendProps {
    friendId: string;
    initialFriendData: {
        name: string;
        age: string;
        gender: string;
        birthday: string;
        picture: string;
        description: string;
    };
    onUpdateFriend: (updatedFriend: Friends) => void;
}

const EditFriend: React.FC<EditFriendProps> = ({ friendId, initialFriendData, onUpdateFriend }) => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: initialFriendData,
    });

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.toString();
                if (base64String) {
                    onChange(base64String);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            if(!data.picture){
                data.picture = defaultImage2;
            }
            const updatedFriend = await FriendsApi.updateFriend(friendId, data);
            onUpdateFriend(updatedFriend);
            setIsOpen(false);
        } catch (error) {
            console.error("Error updating friend:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        reset(initialFriendData);
    }, [initialFriendData, reset]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-others-secondary border-none hover:bg-[#622962]" onClick={() => setIsOpen(true)}>Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Edit Friend</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className='flex flex-col gap-2'>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <>
                                    <Labels
                                        labelName="Name"
                                        type="text"
                                        placeholder="Juan Dela Cruz"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </>
                            )}
                        />
                        <Controller
                            name="age"
                            control={control}
                            rules={{ 
                                required: 'Age is required', 
                                pattern: { value: /^[0-9]+$/, message: 'Age must be a number' }, 
                                max: { value: 99, message: 'Maximum age reached'}
                            }}
                            render={({ field }) => (
                                <>
                                    <Labels
                                        labelName="Age"
                                        type="text"
                                        placeholder="12"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className={errors.age ? 'border-red-500' : ''}
                                    />
                                    {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                                </>
                            )}
                        />
                        <Controller
                            name="gender"
                            control={control}
                            rules={{ required: 'Gender is required' }}
                            render={({ field }) => (
                                <>
                                    <Labels
                                        labelName="Gender"
                                        type="text"
                                        placeholder="Male/Female"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className={errors.gender ? 'border-red-500' : ''}
                                    />
                                    {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                                </>
                            )}
                        />
                        <Controller
                            name="birthday"
                            control={control}
                            rules={{ required: 'Birthday is required' }}
                            render={({ field }) => (
                                <>
                                    <Labels
                                        labelName="Birthday"
                                        type="date"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className={errors.birthday ? 'border-red-500' : ''}
                                    />
                                    {errors.birthday && <p className="text-red-500">{errors.birthday.message}</p>}
                                </>
                            )}
                        />
                        <Controller
                            name="description"
                            control={control}
                            rules={{ required: 'Description is required' }}
                            render={({ field }) => (
                                <>
                                    <TextArea
                                        labelName='Describe your Friend'
                                        placeholder="My friend is..."
                                        value={field.value}
                                        onChange={field.onChange}
                                        className={errors.description ? 'border-red-500' : ''}
                                    />
                                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                                </>
                            )}
                        />
                        <Controller
                            name="picture"
                            control={control}
                            render={({ field }) => (
                                <Labels
                                    labelName="Picture"
                                    type="file"
                                    onFileChange={(e) => handleFileChange(e, field.onChange)}
                                />
                            )}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" className='w-full bg-others-primary border-none text-slate-950 hover:bg-[#7581c5]' loading={loading}>
                            Save Changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditFriend;

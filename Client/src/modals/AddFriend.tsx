import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Labels from '@/components/containers/labels';
import TextArea from '@/components/containers/textArea';
import { createFriend } from "@/network/friends_api";
import { Friends } from "@/models/friends"; 
import defaultImage2 from "../assets/defaultImage2.png"
import { UserRoundPlus } from 'lucide-react';

interface AddFriendProps {
    onAddFriend: (newFriend: Friends) => void;
}

function AddFriend({ onAddFriend }: AddFriendProps) {
    const { control, handleSubmit, reset, setError, formState: { errors } } = useForm<Friends>();
    const [isOpen, setIsOpen] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
        const file = event.target.files?.[0];
        if (file) {
            const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
            if (acceptedImageTypes.includes(file.type)) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result?.toString();
                    if (base64String) {
                        onChange(base64String);
                    } else {
                        console.error('Failed to convert file to base64 string.');
                    }
                };
                reader.onerror = () => {
                    console.error('An error occurred while reading the file.');
                };
                reader.readAsDataURL(file);
            } else {
                console.error('File type not supported. Please select an image file.');
            }
        } else {
            console.error('No file selected.');
        }
    };
    

    const onSubmit = async (data: Friends) => {
        try {
            if(!data.picture){
                data.picture = defaultImage2;
            }
            const newFriend = await createFriend(data);
            console.log("Friend added successfully:", newFriend);
            onAddFriend(newFriend);
            setIsOpen(false);
            reset();
        } catch (error) {
            console.error("Error adding friend:", error);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className='bg-others-secondary border-none hover:bg-[#582358]' onClick={() => setIsOpen(true)}><UserRoundPlus/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add your friend</DialogTitle>
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
                                        placeholder="Enter friend name"
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
                                pattern: { value: /^[0-9]+$/, message: 'Age must be a number'}, 
                                max: { value: 99, message: 'Maximum age reached'}
                            }}
                            render={({ field }) => (
                                <>
                                    <Labels
                                        labelName="Age"
                                        type="text"
                                        placeholder="Enter friend age"
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
                                        placeholder="Male/Female/Others"
                                        value={field.value}
                                        onChange={(value: string) => {
                                            const formattedGender = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                                            field.onChange(formattedGender);
                                        }}
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
                        <Button type="submit" className='w-full bg-others-primary border-none text-slate-950 hover:bg-[#7581c5]'>Add your Friend!</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddFriend;

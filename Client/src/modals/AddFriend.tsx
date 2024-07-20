import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Labels from '@/components/containers/labels';
import TextArea from '@/components/containers/textArea';
import { createFriend } from "@/network/friends_api";
import { Friends } from "@/models/friends"; 

interface AddFriendProps {
    onAddFriend: (newFriend: Friends) => void;
}

function AddFriend({ onAddFriend }: AddFriendProps) {
    const { control, handleSubmit, reset } = useForm<Friends>();

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

    const onSubmit = async (data: Friends) => {
        try {
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
                <Button className='bg-others-secondary border-none hover:bg-[#582358]' onClick={() => setIsOpen(true)}>Add Friend</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add your Friend</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className='flex flex-col gap-2'>
                        <Controller
                            name="name"
                            control={control}
                            rules={{required: true}}
                            render={({ field }) => (
                                <Labels
                                    labelName="Name"
                                    type="text"
                                    placeholder="Juan Dela Cruz"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <Controller
                            name="age"
                            control={control}
                            render={({ field }) => (
                                <Labels
                                    labelName="Age"
                                    type="text"
                                    placeholder="12"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <Labels
                                    labelName="Gender"
                                    type="text"
                                    placeholder="Male/Female"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <Controller
                            name="birthday"
                            control={control}
                            render={({ field }) => (
                                <Labels
                                    labelName="Birthday"
                                    type="date"
                                    placeholder="12"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <TextArea
                                    labelName='Describe your Friend'
                                    placeholder="My friend is..."
                                    value={field.value}
                                    onChange={field.onChange}
                                />
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

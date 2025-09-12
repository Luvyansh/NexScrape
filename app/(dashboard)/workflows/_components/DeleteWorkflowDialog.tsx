"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    workflowName: string;
}

function DeleteWorkflowDialog({ open, setOpen, workflowName }: Props) {
    const [confirmText, setConfirmText] = useState("");
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your workflow.
                        <div className="flex flex-col py-4 gap-2">
                            <p>If you are sure, enter <b>{workflowName}</b> to confirm:</p>
                            <Input value={confirmText} onChange={(e) => setConfirmText(e.target.value)} className="w-full focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2" />
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={confirmText !== workflowName}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/80"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteWorkflowDialog

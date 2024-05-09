import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";

import { Button as ButtonDialogue } from "@/components/ui/button";


const SendButton = () => {
    return (
        <div className="flex justify-end">
            <AlertDialog>
            <AlertDialogTrigger asChild>
                <ButtonDialogue type="submit" variant="outline" className="bg-primary text-gray-800 px-4 py-2 rounded hover:bg-primary">Envoyer les réponses</ButtonDialogue>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Merci !</AlertDialogTitle>
                <AlertDialogDescription>
                    Tes réponses ont bien été envoyées avec le nom indiqué. Tu peux répondre au questionnaire autant que tu le souhaites, seul ton dernier envoi sera pris en compte.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction>Ok</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default SendButton;
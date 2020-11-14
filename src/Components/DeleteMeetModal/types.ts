export type IDeleteMeetModal = {
  title: string;
  description: string;
  confirmDeleteMeetBtnText: string;
  isOpen: boolean;
  confirmAction(): void;
  cancelAction(): void;
};

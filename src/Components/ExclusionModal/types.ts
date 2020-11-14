export type IExclusionModal = {
  title: string;
  description: string;
  confirmExclusionBtnText: string;
  isOpen: boolean;
  confirmAction(): void;
  cancelAction(): void;
};

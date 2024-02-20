'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '@/components/ui/modal';

export const StoreModal = () => {
  const StoreModal = useStoreModal();

  return (
    <Modal title="Create Store" description="Add New Store to manage product and categories" isOpen={StoreModal.isOpen} onClose={StoreModal.onClose}>
      Future Create Form
    </Modal>
  );
};

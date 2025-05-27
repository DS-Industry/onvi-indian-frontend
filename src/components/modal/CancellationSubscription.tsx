"use client";

import { Modal, Button } from "antd";
import { PropsWithChildren } from "react";

interface ICancellationSubscription {
  active: boolean;
  title: string;
  info?: boolean;
  onSubmitName?: string;
  onSubmit: () => void;
  onClose: () => void;
}

const CancellationSubscription = ({
  active,
  title,
  info = false,
  onSubmit,
  onSubmitName = "Confirm",
  onClose,
  children,
}: PropsWithChildren<ICancellationSubscription>) => {
  return (
    <Modal
      title={title}
      open={active}
      onOk={!info ? onSubmit : onClose}
      onCancel={onClose}
      footer={
        info ? (
          <Button onClick={onClose}>Close</Button>
        ) : (
          <>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onSubmit}>
              {onSubmitName}
            </Button>
          </>
        )
      }
    >
      {children}
    </Modal>
  );
};

export default CancellationSubscription;

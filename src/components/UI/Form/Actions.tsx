import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

type Props = {
  viewButton: () => void;
  updateButton: () => void;
  deleteButton: () => void;
  id: string;
  setWorkingId: React.Dispatch<React.SetStateAction<string>>;
};

const Actions: React.FC<Props> = ({
  viewButton,
  updateButton,
  deleteButton,
  id,
  setWorkingId,
}) => {
  const view = () => {
    setWorkingId(id);
    viewButton();
  };

  const update = () => {
    setWorkingId(id);
    updateButton();
  };

  const deleteTrue = () => {
    setWorkingId(id);
    deleteButton();
  };

  return (
    <div className="flex items-center gap-3">
      <div className="text-lg" onClick={view}>
        <AiOutlineEye />
      </div>
      <div onClick={update}>
        <BsPencilSquare />
      </div>
      <div onClick={deleteTrue}>
        <BsTrash />
      </div>
    </div>
  );
};

export default Actions;

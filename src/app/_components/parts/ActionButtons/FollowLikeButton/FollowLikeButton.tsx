'use client';

import { FC, useState } from 'react';

type Props = {
  type: 'follow' | 'like';
  onAdd: () => void;
  onDelete: () => void;
  initialState?: boolean;
};

export const FollowLikeButton: FC<Props> = ({ type, onAdd, onDelete, initialState = false }) => {
  // stateはBE実装後に削除するかも（isActiveをBEから取得する）
  const [isActive, setIsActive] = useState(initialState);

  const handleAdd = () => {
    onAdd();
    setIsActive(!isActive);
  };

  const handleDelete = () => {
    onDelete();
    setIsActive(!isActive);
  };

  const btnClass = isActive
    ? 'rounded-md px-4 py-1 text-sm border text-[#fff] bg-tomato-9 border-transparent'
    : 'rounded-md px-4 py-1 text-sm border text-tomato-9 border-tomato-solid bg-white';

  return (
    <button className={btnClass} onClick={isActive ? handleDelete : handleAdd}>
      {isActive
        ? type === 'follow'
          ? 'フォロー中'
          : 'お気に入りから削除'
        : type === 'follow'
        ? 'フォローする'
        : 'お気に入りに追加'}
    </button>
  );
};

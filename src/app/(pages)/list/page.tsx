import { ShoppingList } from '@/app/_components/features/shopping-list/ShoppingList';
import { ShoppingMemoList } from '@/app/_components/features/shopping-list/ShoppingMemoList';
import { dummyShoppingList } from '@/app/_data/dummyShoppingList';
import { dummyShoppingMemo } from '@/app/_data/dummyShoppingMemo';

const ListPage = () => {
  return (
    <div>
      {/* 自分メモ */}
      {dummyShoppingMemo.length > 0 && <ShoppingMemoList items={dummyShoppingMemo} />}
      {/* ショッピングリスト */}
      {dummyShoppingList.length > 0 && (
        <ul>
          {dummyShoppingList.map((item, i) => {
            return (
              <li key={item.id}>
                <ShoppingList list={item} isFirst={i === 0} isLast={i === dummyShoppingList.length - 1} />
              </li>
            );
          })}
        </ul>
      )}

      {dummyShoppingMemo.length === 0 && dummyShoppingList.length === 0 && <p>買い物リストはありません</p>}
    </div>
  );
};

export default ListPage;

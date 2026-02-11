import { Trash2 } from 'lucide-react';

interface HeaderProps {
  onTrashClick: () => void;
  trashCount: number;
}

export function Header({ onTrashClick, trashCount }: HeaderProps) {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Ícone amarelo removido daqui */}
          <h1 className="text-xl font-normal text-gray-700">Memoris</h1>
        </div>
        
        <button
          onClick={onTrashClick}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors relative"
        >
          <Trash2 size={20} className="text-gray-600" />
          {trashCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {trashCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        onClick={() => setTheme('light')}
        className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-yellow-300' : 'bg-gray-200'}`}
      >
        🌞
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}
      >
        🌚
      </button>
      <button
        onClick={() => setTheme('valesquita')}
        className={`px-4 py-2 rounded ${theme === 'valesquita' ? 'bg-pink-300' : 'bg-gray-200'}`}
      >
        🌸
      </button>
    </div>
  );
}

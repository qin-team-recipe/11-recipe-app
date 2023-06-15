import { BottomNavMenu } from './BottomNavMenu';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 h-footer bg-[#fff] sm:hidden">
      <BottomNavMenu />
    </footer>
  );
};

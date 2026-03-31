import { cn } from '../../lib/utils';

export default function Card({ children, className = '', glass = false, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        glass
          ? 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/20 shadow-xl'
          : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

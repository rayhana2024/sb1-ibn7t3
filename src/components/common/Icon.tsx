import { Icons, IconName } from '@/utils/icons';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
  const IconComponent = Icons[name];
  return <IconComponent className={className} size={size} />;
}
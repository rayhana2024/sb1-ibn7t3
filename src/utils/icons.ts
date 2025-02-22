// Importation sélective des icônes pour réduire la taille du bundle
import {
  UserCircle,
  Flower2,
  Sparkles,
  Users,
  ShoppingBag,
  MessageCircle,
  LogIn,
  Bell,
  Heart,
  Calendar,
  Clock,
  Share2,
  X,
  Settings,
  AlertTriangle,
  Sun,
  Moon,
  Cloud,
  Wind,
  Activity,
  Brain,
  Apple,
  Coffee,
  Droplet,
  Filter,
  Search,
  Plus,
  Trash,
  Edit,
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Upload,
  ExternalLink,
  MapPin,
  Star,
  Award,
  BookmarkPlus,
  BookmarkCheck
} from 'lucide-react/dist/esm/icons';

export const Icons = {
  UserCircle,
  Flower2,
  Sparkles,
  Users,
  ShoppingBag,
  MessageCircle,
  LogIn,
  Bell,
  Heart,
  Calendar,
  Clock,
  Share2,
  X,
  Settings,
  AlertTriangle,
  Sun,
  Moon,
  Cloud,
  Wind,
  Activity,
  Brain,
  Apple,
  Coffee,
  Droplet,
  Filter,
  Search,
  Plus,
  Trash,
  Edit,
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Upload,
  ExternalLink,
  MapPin,
  Star,
  Award,
  BookmarkPlus,
  BookmarkCheck
} as const;

export type IconName = keyof typeof Icons;
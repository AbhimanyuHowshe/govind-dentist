import {
  Stethoscope,
  ClipboardCheck,
  Sparkles,
  Wrench,
  Syringe,
  CircleMinus,
  Crown,
  Layers,
  SmilePlus,
  ShieldCheck,
  Sun,
  WandSparkles,
  Gem,
  Grid2x2Plus,
  CircleDashed,
  Baby,
  HeartPulse,
  AlertTriangle,
  Siren,
} from "lucide-react";

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "ClipboardCheck":
      return <ClipboardCheck className={className} aria-hidden="true" />;
    case "Sparkles":
      return <Sparkles className={className} aria-hidden="true" />;
    case "Wrench":
      return <Wrench className={className} aria-hidden="true" />;
    case "Syringe":
      return <Syringe className={className} aria-hidden="true" />;
    case "CircleMinus":
      return <CircleMinus className={className} aria-hidden="true" />;
    case "Crown":
      return <Crown className={className} aria-hidden="true" />;
    case "Layers":
      return <Layers className={className} aria-hidden="true" />;
    case "SmilePlus":
      return <SmilePlus className={className} aria-hidden="true" />;
    case "ShieldCheck":
      return <ShieldCheck className={className} aria-hidden="true" />;
    case "Sun":
      return <Sun className={className} aria-hidden="true" />;
    case "WandSparkles":
      return <WandSparkles className={className} aria-hidden="true" />;
    case "Gem":
      return <Gem className={className} aria-hidden="true" />;
    case "Grid2x2Plus":
      return <Grid2x2Plus className={className} aria-hidden="true" />;
    case "CircleDashed":
      return <CircleDashed className={className} aria-hidden="true" />;
    case "Baby":
      return <Baby className={className} aria-hidden="true" />;
    case "HeartPulse":
      return <HeartPulse className={className} aria-hidden="true" />;
    case "AlertTriangle":
      return <AlertTriangle className={className} aria-hidden="true" />;
    case "Siren":
      return <Siren className={className} aria-hidden="true" />;
    case "Stethoscope":
    default:
      return <Stethoscope className={className} aria-hidden="true" />;
  }
}

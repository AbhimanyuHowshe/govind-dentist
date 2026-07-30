import { services } from "@/data/services";
import type { Service } from "@/types/service";

// Curated alias terms per service slug, used for lightweight keyword-match
// retrieval (see buildServiceDetailContext in system-prompt.ts). Deliberately
// specific — broad single words like "tooth" or "dentist" are avoided so a
// generic message doesn't spuriously pull in a service's full detail block.
const SERVICE_KEYWORDS: Record<string, string[]> = {
  "general-dentistry": ["general dentistry", "general dental"],
  "dental-checkups": ["checkup", "check-up", "check up", "dental exam", "examination"],
  "teeth-cleaning": ["teeth cleaning", "cleaning", "scaling", "plaque", "tartar"],
  "dental-fillings": ["filling", "fillings", "cavity", "cavities"],
  "root-canal-treatment": ["root canal", "rct", "endodontic"],
  "tooth-extraction": ["extraction", "pull my tooth", "pull a tooth", "remove my tooth", "removing a tooth"],
  "teeth-whitening": ["whitening", "whiten my teeth", "whiten teeth", "yellow teeth", "stained teeth"],
  "smile-makeover": ["smile makeover", "smile design"],
  veneers: ["veneer", "veneers"],
  braces: ["braces", "crooked teeth", "straighten my teeth", "straighten teeth"],
  invisalign: ["invisalign", "clear aligner", "clear aligners", "aligners"],
  "wisdom-tooth-removal": ["wisdom tooth", "wisdom teeth"],
  "emergency-dental-care": [
    "emergency",
    "urgent",
    "broken tooth",
    "knocked out",
    "severe pain",
    "toothache emergency",
  ],
};

export function findRelevantServices(message: string, maxResults = 2): Service[] {
  const normalized = message.toLowerCase();
  const matches: Service[] = [];

  for (const service of services) {
    const keywords = SERVICE_KEYWORDS[service.slug];
    if (!keywords) continue;
    if (keywords.some((kw) => normalized.includes(kw))) {
      matches.push(service);
      if (matches.length >= maxResults) break;
    }
  }

  return matches;
}

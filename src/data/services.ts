import type { Service } from "@/types/service";

function heroImage(photoId: string) {
  return `https://images.unsplash.com/photo-${photoId}?w=1600&q=80`;
}

// PLACEHOLDER: heroImageUrl values use Unsplash stock photography stand-ins and must
// be replaced with real clinical/procedure photography before launch. See PLACEHOLDER_CONTENT.md.
export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    category: "general",
    icon: "Stethoscope",
    heroImageUrl: heroImage("1704455306925-1401c3012117"),
    heroImageAlt: "Dentist performing a general dental examination",
    metaTitle: "General Dentistry in Ujjain | Family Dentist Ujjain",
    metaDescription:
      "Comprehensive general dentistry in Ujjain for the whole family. Checkups, fillings, cleanings and preventive care from Dr. Govind Singh & Dr. Preeti Singh.",
    keywords: ["General Dentistry Ujjain", "Family Dentist Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Complete Dental Care for Every Age",
      paragraphs: [
        "General dentistry is the foundation of good oral health — regular checkups, cleanings, and early treatment that keep small issues from becoming big problems. Our clinic serves as a family dental home for patients of all ages in Ujjain.",
        "From your first visit onward, we focus on prevention, education, and building a long-term relationship so we understand your dental history and can catch issues early.",
      ],
    },
    symptoms: {
      heading: "When to Schedule a Visit",
      items: [
        "It has been more than six months since your last dental checkup",
        "Sensitivity to hot, cold, or sweet foods",
        "Bleeding or swollen gums while brushing",
        "Bad breath that doesn't go away",
        "Visible plaque or tartar buildup",
      ],
    },
    benefits: {
      heading: "Why Regular Dental Care Matters",
      items: [
        "Early detection of cavities and gum disease",
        "Lower long-term treatment costs through prevention",
        "Personalized care from doctors who know your history",
        "A comfortable, hygienic environment for the whole family",
      ],
    },
    treatmentProcess: {
      heading: "What to Expect at Your Visit",
      steps: [
        { step: 1, title: "Consultation", description: "We review your dental and medical history and discuss any concerns." },
        { step: 2, title: "Examination", description: "A thorough check of teeth, gums, and bite, with X-rays if needed." },
        { step: 3, title: "Diagnosis & Plan", description: "We explain any findings and outline a clear, personalized treatment plan." },
        { step: 4, title: "Treatment", description: "Same-day treatment for straightforward issues, or scheduling for larger procedures." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: [
        "Most general dentistry visits require no recovery time at all — you can return to normal activities immediately.",
      ],
      tips: [
        "Maintain brushing twice daily and flossing once daily",
        "Follow up every 6 months for routine checkups",
      ],
    },
    faqs: [
      { question: "How often should I visit the dentist?", answer: "We recommend a checkup and cleaning every six months for most patients, though your dentist may suggest a different schedule based on your oral health." },
      { question: "Is general dentistry suitable for children?", answer: "Yes — we welcome patients of all ages and can refer to specialized pediatric care within the clinic when needed." },
      { question: "Do you use X-rays at every visit?", answer: "Not necessarily. X-rays are taken based on clinical need and are typically reviewed on an annual basis unless a specific concern arises." },
    ],
    relatedServiceSlugs: ["dental-checkups", "teeth-cleaning", "dental-fillings"],
  },
  {
    slug: "dental-checkups",
    name: "Dental Checkups",
    category: "general",
    icon: "ClipboardCheck",
    heroImageUrl: heroImage("1609207825181-52d3214556dd"),
    heroImageAlt: "Routine dental checkup and examination",
    metaTitle: "Dental Checkup in Ujjain | Routine Dental Exams",
    metaDescription:
      "Book a thorough dental checkup in Ujjain with Dr. Govind Singh & Dr. Preeti Singh — full oral examination, X-rays, and a personalized care plan.",
    keywords: ["Dental Checkup Ujjain", "Dentist in Ujjain", "Best Dentist in Ujjain"],
    overview: {
      heading: "Routine Exams That Catch Problems Early",
      paragraphs: [
        "A dental checkup is more than a quick look — it's a comprehensive review of your teeth, gums, bite, and overall oral health designed to catch issues while they're still small and easy to treat.",
        "Our checkups combine a visual and physical examination with diagnostic imaging when needed, so nothing gets missed.",
      ],
    },
    symptoms: {
      heading: "Signs You're Due for a Checkup",
      items: [
        "More than 6 months since your last visit",
        "New sensitivity or discomfort",
        "Changes in how your bite feels",
        "A family history of gum disease or cavities",
      ],
    },
    benefits: {
      heading: "Benefits of Routine Checkups",
      items: [
        "Cavities and gum disease caught before symptoms appear",
        "Professional guidance on brushing and flossing technique",
        "Oral cancer screening as part of every exam",
        "Peace of mind knowing your oral health is on track",
      ],
    },
    treatmentProcess: {
      heading: "What Happens During a Checkup",
      steps: [
        { step: 1, title: "Medical History Review", description: "We update your health history and note any new concerns." },
        { step: 2, title: "Visual & Physical Exam", description: "Checking teeth, gums, tongue, and soft tissues for abnormalities." },
        { step: 3, title: "Diagnostic X-rays", description: "Taken as needed to see beneath the surface and between teeth." },
        { step: 4, title: "Discussion & Plan", description: "We walk you through findings and any recommended next steps." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["No recovery time is needed after a routine checkup — resume your day right away."],
    },
    faqs: [
      { question: "How long does a checkup take?", answer: "A standard checkup typically takes 20–30 minutes, longer if X-rays or additional evaluation are needed." },
      { question: "Will a checkup include cleaning?", answer: "Checkups and cleanings are often scheduled together; ask us when booking if you'd like both in one visit." },
      { question: "Do checkups hurt?", answer: "No — a routine checkup is non-invasive and generally comfortable for patients of all ages." },
    ],
    relatedServiceSlugs: ["teeth-cleaning", "general-dentistry"],
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    category: "general",
    icon: "Sparkles",
    heroImageUrl: heroImage("1663185551550-f8f56529ac5e"),
    heroImageAlt: "Professional dental teeth cleaning procedure",
    metaTitle: "Professional Teeth Cleaning in Ujjain",
    metaDescription:
      "Professional scaling and teeth cleaning in Ujjain to remove plaque and tartar, freshen breath, and protect your gums. Book with our experienced dental team.",
    keywords: ["Teeth Cleaning Ujjain", "Dental Scaling Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Professional Scaling & Polishing",
      paragraphs: [
        "Even with diligent brushing, plaque and tartar build up in places a toothbrush can't reach. Professional teeth cleaning removes this buildup, protecting your gums and keeping your smile bright.",
        "Our hygienists use ultrasonic scaling and polishing to gently and thoroughly clean above and below the gumline.",
      ],
    },
    symptoms: {
      heading: "Signs You Need a Cleaning",
      items: [
        "Visible yellow or brown buildup on teeth",
        "Persistent bad breath",
        "Gums that bleed when brushing or flossing",
        "A rough feeling on the back of lower front teeth",
      ],
    },
    benefits: {
      heading: "Benefits of Professional Cleaning",
      items: [
        "Removes plaque and tartar brushing alone can't reach",
        "Reduces risk of gum disease and cavities",
        "Freshens breath and brightens your smile",
        "Gives your dentist a clear view to spot early problems",
      ],
    },
    treatmentProcess: {
      heading: "The Cleaning Process",
      steps: [
        { step: 1, title: "Examination", description: "A quick check of gums and teeth before cleaning begins." },
        { step: 2, title: "Scaling", description: "Ultrasonic instruments gently remove plaque and tartar." },
        { step: 3, title: "Polishing", description: "Teeth are polished to remove surface stains and smooth enamel." },
        { step: 4, title: "Fluoride (Optional)", description: "A fluoride application can be added to strengthen enamel." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["Some mild gum sensitivity is normal for a day or two after a deep cleaning."],
      tips: ["Avoid very hot or cold foods for 24 hours if gums feel sensitive", "Continue gentle brushing and flossing at home"],
    },
    faqs: [
      { question: "How often should I get my teeth professionally cleaned?", answer: "Most patients benefit from cleaning every 6 months, though some with gum concerns may need more frequent visits." },
      { question: "Is teeth cleaning painful?", answer: "Cleaning is generally comfortable; mild sensitivity can occur if there's significant tartar buildup or gum inflammation." },
      { question: "Will cleaning make my teeth whiter?", answer: "Cleaning removes surface stains and buildup which can noticeably brighten teeth, though it isn't a substitute for whitening treatment." },
    ],
    relatedServiceSlugs: ["dental-checkups", "gum-treatment", "teeth-whitening"],
  },
  {
    slug: "dental-fillings",
    name: "Dental Fillings",
    category: "restorative",
    icon: "Wrench",
    heroImageUrl: heroImage("1670250492416-570b5b7343b1"),
    heroImageAlt: "Dentist placing a tooth-colored dental filling",
    metaTitle: "Dental Fillings in Ujjain | Tooth-Colored Fillings",
    metaDescription:
      "Durable, tooth-colored dental fillings in Ujjain to treat cavities and restore damaged teeth comfortably and affordably.",
    keywords: ["Dental Fillings Ujjain", "Cavity Treatment Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Restoring Teeth Damaged by Decay",
      paragraphs: [
        "A filling restores a tooth after decay has been removed, sealing it against further damage and restoring its shape and function.",
        "We use tooth-colored composite materials that blend naturally with your smile, avoiding the dark metal fillings of the past.",
      ],
    },
    symptoms: {
      heading: "Signs You May Need a Filling",
      items: [
        "Visible pits or holes in a tooth",
        "Toothache or sensitivity when eating sweets",
        "Sharp pain when biting down",
        "Floss catching or tearing at a specific spot",
      ],
    },
    benefits: {
      heading: "Benefits of Timely Fillings",
      items: [
        "Stops decay from spreading deeper into the tooth",
        "Restores normal chewing function",
        "Tooth-colored material blends seamlessly with your smile",
        "A quick, typically single-visit procedure",
      ],
    },
    treatmentProcess: {
      heading: "The Filling Procedure",
      steps: [
        { step: 1, title: "Numbing", description: "Local anesthesia ensures a comfortable procedure." },
        { step: 2, title: "Decay Removal", description: "Decayed tissue is carefully removed from the tooth." },
        { step: 3, title: "Filling Placement", description: "Tooth-colored composite is layered and shaped to match your tooth." },
        { step: 4, title: "Curing & Polishing", description: "A curing light hardens the material, then it's polished smooth." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["You can eat and drink normally once numbness wears off, usually within a few hours."],
      tips: ["Avoid chewing on the treated side until numbness fully subsides", "Mild sensitivity to temperature for a few days is normal"],
    },
    faqs: [
      { question: "Do fillings hurt?", answer: "The area is numbed beforehand, so the procedure itself is generally painless." },
      { question: "How long do fillings last?", answer: "Composite fillings typically last 7–10 years or longer with good oral hygiene." },
      { question: "Can I eat right after a filling?", answer: "It's best to wait until the numbness wears off to avoid accidentally biting your cheek or tongue." },
    ],
    relatedServiceSlugs: ["root-canal-treatment", "dental-crowns"],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    category: "restorative",
    icon: "Syringe",
    heroImageUrl: heroImage("1777444969135-caf869407707"),
    heroImageAlt: "Root canal treatment procedure at the dental clinic",
    metaTitle: "Root Canal Treatment in Ujjain | Painless RCT",
    metaDescription:
      "Painless, modern root canal treatment (RCT) in Ujjain to save infected teeth and relieve pain. Expert care from Dr. Govind Singh & Dr. Preeti Singh.",
    keywords: ["Root Canal Treatment Ujjain", "RCT Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Saving Teeth, Relieving Pain",
      paragraphs: [
        "Root canal treatment removes infected or inflamed tissue from inside a tooth, relieving pain and saving the tooth from extraction.",
        "Modern techniques and effective anesthesia mean root canal treatment today is far more comfortable than its reputation suggests — most patients report feeling relief, not dread.",
      ],
    },
    symptoms: {
      heading: "Signs You May Need a Root Canal",
      items: [
        "Severe, persistent toothache",
        "Sensitivity to hot or cold that lingers",
        "Swelling or tenderness in nearby gums",
        "A darkening tooth",
        "Pain when chewing or applying pressure",
      ],
    },
    benefits: {
      heading: "Benefits of Root Canal Treatment",
      items: [
        "Saves your natural tooth instead of extracting it",
        "Relieves pain caused by infection or inflammation",
        "Prevents infection from spreading to surrounding teeth and bone",
        "Restores normal biting and chewing function",
      ],
    },
    treatmentProcess: {
      heading: "The Root Canal Procedure",
      steps: [
        { step: 1, title: "Diagnosis", description: "X-rays confirm the extent of infection and plan treatment." },
        { step: 2, title: "Numbing", description: "Local anesthesia keeps the procedure comfortable." },
        { step: 3, title: "Cleaning the Canal", description: "Infected pulp is removed and the canal is cleaned and shaped." },
        { step: 4, title: "Sealing", description: "The canal is filled and sealed to prevent reinfection." },
        { step: 5, title: "Crown Placement", description: "A crown is typically placed to protect and strengthen the treated tooth." },
      ],
    },
    recovery: {
      heading: "Aftercare & Healing",
      paragraphs: ["Mild soreness for a few days is normal and manageable with over-the-counter pain relief."],
      tips: ["Avoid chewing on the treated tooth until a permanent crown is placed", "Continue regular brushing and flossing"],
    },
    faqs: [
      { question: "Is root canal treatment painful?", answer: "With modern anesthesia, the procedure itself is typically pain-free; most patients feel far less discomfort than before treatment." },
      { question: "How many visits does it take?", answer: "Most root canals are completed in 1–2 visits depending on the tooth and severity of infection." },
      { question: "Do I need a crown after a root canal?", answer: "Yes, in most cases — a crown protects the treated tooth, which can become brittle over time, from fracturing." },
    ],
    relatedServiceSlugs: ["dental-crowns", "dental-fillings", "emergency-dental-care"],
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    category: "surgical",
    icon: "CircleMinus",
    heroImageUrl: heroImage("1662837625421-5fd8ed6131a0"),
    heroImageAlt: "Tooth extraction procedure",
    metaTitle: "Tooth Extraction in Ujjain | Safe & Painless Extractions",
    metaDescription:
      "Safe, gentle tooth extractions in Ujjain when a tooth can't be saved, with clear aftercare guidance for a smooth recovery.",
    keywords: ["Tooth Extraction Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "When Extraction Is the Right Choice",
      paragraphs: [
        "While we always aim to save a natural tooth, extraction becomes necessary when a tooth is too damaged, decayed, or infected to restore, or when it's causing crowding or impaction.",
        "We prioritize your comfort throughout, using effective anesthesia and gentle technique for a smooth procedure and recovery.",
      ],
    },
    symptoms: {
      heading: "When Extraction May Be Needed",
      items: [
        "Severe decay that can't be restored with a filling or crown",
        "Advanced gum disease causing tooth looseness",
        "A fractured tooth below the gumline",
        "Overcrowding requiring orthodontic space",
        "An impacted or infected wisdom tooth",
      ],
    },
    benefits: {
      heading: "Benefits of Timely Extraction",
      items: [
        "Removes source of pain or infection",
        "Prevents spread of infection to adjacent teeth",
        "Creates space for orthodontic treatment when needed",
        "Paves the way for replacement options like implants or bridges",
      ],
    },
    treatmentProcess: {
      heading: "The Extraction Procedure",
      steps: [
        { step: 1, title: "Assessment", description: "X-rays and examination confirm the extraction is necessary." },
        { step: 2, title: "Numbing", description: "Local anesthesia numbs the tooth and surrounding tissue." },
        { step: 3, title: "Extraction", description: "The tooth is carefully loosened and removed." },
        { step: 4, title: "Aftercare Instructions", description: "You'll receive clear guidance for a smooth, infection-free recovery." },
      ],
    },
    recovery: {
      heading: "Healing After Extraction",
      paragraphs: ["Mild swelling and discomfort for 2–3 days is normal and manageable with prescribed care."],
      tips: [
        "Bite on gauze to control bleeding for the first hour",
        "Avoid rinsing vigorously, smoking, or using a straw for 24 hours",
        "Stick to soft foods for the first day or two",
      ],
    },
    faqs: [
      { question: "Is tooth extraction painful?", answer: "The area is fully numbed before extraction, so you shouldn't feel pain during the procedure — some pressure is normal." },
      { question: "How long does recovery take?", answer: "Most patients feel back to normal within a few days, with complete gum healing over 1–2 weeks." },
      { question: "What are my options after extraction?", answer: "Depending on the tooth, we may discuss implants, bridges, or dentures to replace it and maintain your bite." },
    ],
    relatedServiceSlugs: ["wisdom-tooth-removal", "dental-implants", "dentures"],
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    category: "restorative",
    icon: "Crown",
    heroImageUrl: heroImage("1663182234283-28941e7612da"),
    heroImageAlt: "Dental crown restoration on a model tooth",
    metaTitle: "Dental Crowns in Ujjain | Strong, Natural-Looking Crowns",
    metaDescription:
      "Custom dental crowns in Ujjain to restore strength, shape, and appearance to damaged or weakened teeth.",
    keywords: ["Dental Crowns Ujjain", "Tooth Cap Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Restoring Strength and Shape",
      paragraphs: [
        "A dental crown is a custom-made cap that covers a damaged tooth, restoring its strength, shape, and appearance while protecting it from further damage.",
        "Crowns are commonly used after root canal treatment, for large fillings, cracked teeth, or to anchor a bridge.",
      ],
    },
    symptoms: {
      heading: "When a Crown May Be Recommended",
      items: [
        "A tooth with a large filling and little natural structure left",
        "A cracked or fractured tooth",
        "After root canal treatment",
        "Severely worn-down teeth",
        "Cosmetic reshaping of a misshapen tooth",
      ],
    },
    benefits: {
      heading: "Benefits of Dental Crowns",
      items: [
        "Restores full chewing function",
        "Protects a weakened tooth from further damage",
        "Natural-looking, durable materials",
        "Long-lasting solution with proper care",
      ],
    },
    treatmentProcess: {
      heading: "The Crown Procedure",
      steps: [
        { step: 1, title: "Tooth Preparation", description: "The tooth is shaped to make room for the crown." },
        { step: 2, title: "Impressions", description: "Precise impressions are taken to custom-fit your crown." },
        { step: 3, title: "Temporary Crown", description: "A temporary crown protects the tooth while the permanent one is made." },
        { step: 4, title: "Final Placement", description: "The custom crown is fitted, adjusted, and permanently cemented." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["Mild sensitivity for a few days after placement is normal and typically resolves quickly."],
      tips: ["Avoid very sticky or hard foods on a new crown initially", "Maintain regular brushing and flossing around the crown margin"],
    },
    faqs: [
      { question: "How long do dental crowns last?", answer: "With good care, crowns typically last 10–15 years or longer." },
      { question: "Will my crown look natural?", answer: "Yes — modern crown materials are shade-matched to blend seamlessly with your surrounding teeth." },
      { question: "How many visits does a crown take?", answer: "Typically two visits: one for preparation and impressions, one for final placement." },
    ],
    relatedServiceSlugs: ["root-canal-treatment", "dental-bridges", "dental-implants"],
  },
  {
    slug: "dental-bridges",
    name: "Dental Bridges",
    category: "restorative",
    icon: "Layers",
    heroImageUrl: heroImage("1643916800611-1302e8d27c38"),
    heroImageAlt: "Dental bridge model showing replacement teeth",
    metaTitle: "Dental Bridges in Ujjain | Replace Missing Teeth",
    metaDescription:
      "Custom dental bridges in Ujjain to replace one or more missing teeth and restore your smile and bite.",
    keywords: ["Dental Bridges Ujjain", "Missing Teeth Replacement Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Bridging the Gap Left by Missing Teeth",
      paragraphs: [
        "A dental bridge replaces one or more missing teeth by anchoring a replacement tooth to the adjacent natural teeth or implants, restoring both function and appearance.",
        "Bridges prevent surrounding teeth from shifting into the gap and help maintain your natural bite and facial shape.",
      ],
    },
    symptoms: {
      heading: "When a Bridge May Help",
      items: [
        "One or more missing teeth affecting your bite",
        "Difficulty chewing on one side",
        "Surrounding teeth beginning to shift or tilt",
        "Gaps affecting your speech or confidence to smile",
      ],
    },
    benefits: {
      heading: "Benefits of Dental Bridges",
      items: [
        "Restores full chewing ability",
        "Prevents adjacent teeth from shifting",
        "Maintains natural facial structure",
        "Fixed in place — no removal needed like dentures",
      ],
    },
    treatmentProcess: {
      heading: "The Bridge Procedure",
      steps: [
        { step: 1, title: "Preparation", description: "Anchor teeth on either side of the gap are prepared and shaped." },
        { step: 2, title: "Impressions", description: "Precise molds ensure a comfortable, natural fit." },
        { step: 3, title: "Temporary Bridge", description: "Worn while your custom bridge is fabricated." },
        { step: 4, title: "Final Fitting", description: "The finished bridge is checked, adjusted, and cemented in place." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["Adjustment to a new bridge typically takes just a few days."],
      tips: ["Use floss threaders or interdental brushes to clean under the bridge", "Avoid excessively hard or sticky foods initially"],
    },
    faqs: [
      { question: "How long do dental bridges last?", answer: "With proper care, bridges typically last 10–15 years." },
      { question: "Is a bridge better than an implant?", answer: "Both are effective options — a bridge doesn't require surgery, while implants don't rely on adjacent teeth. We'll help you choose based on your situation." },
      { question: "Can I eat normally with a bridge?", answer: "Yes, once you adjust to it, a bridge functions much like your natural teeth." },
    ],
    relatedServiceSlugs: ["dental-implants", "dental-crowns", "dentures"],
  },
  {
    slug: "dentures",
    name: "Dentures",
    category: "restorative",
    icon: "SmilePlus",
    heroImageUrl: heroImage("1616391182219-e080b4d1043a"),
    heroImageAlt: "Complete and partial denture sets",
    metaTitle: "Dentures in Ujjain | Complete & Partial Dentures",
    metaDescription:
      "Comfortable, custom-fit complete and partial dentures in Ujjain to restore your smile and ability to eat and speak confidently.",
    keywords: ["Dentures Ujjain", "False Teeth Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Restoring a Full, Confident Smile",
      paragraphs: [
        "Dentures are removable replacements for missing teeth, available as complete sets (for a fully edentulous arch) or partial dentures (when some natural teeth remain).",
        "We custom-fit every denture to your mouth for a comfortable, natural-looking result that restores your ability to eat and speak with confidence.",
      ],
    },
    symptoms: {
      heading: "When Dentures May Be Recommended",
      items: [
        "Multiple missing teeth affecting chewing or speech",
        "Loose or failing teeth that can't be saved",
        "A sunken facial appearance from missing teeth",
        "Difficulty affording or undergoing implant surgery",
      ],
    },
    benefits: {
      heading: "Benefits of Dentures",
      items: [
        "Restores chewing ability and speech clarity",
        "Supports facial structure and appearance",
        "Non-surgical, cost-effective tooth replacement",
        "Custom-made for comfort and natural aesthetics",
      ],
    },
    treatmentProcess: {
      heading: "The Denture Process",
      steps: [
        { step: 1, title: "Assessment", description: "We evaluate your gums, jaw, and any remaining teeth." },
        { step: 2, title: "Impressions & Measurements", description: "Precise molds and bite measurements are taken." },
        { step: 3, title: "Trial Fitting", description: "A trial denture lets you preview fit, comfort, and appearance." },
        { step: 4, title: "Final Fitting", description: "Adjustments are made for a comfortable, secure final fit." },
      ],
    },
    recovery: {
      heading: "Adjusting to New Dentures",
      paragraphs: ["A short adjustment period of a few weeks is normal as you get used to speaking and eating with new dentures."],
      tips: ["Start with soft foods and gradually reintroduce harder foods", "Remove and clean dentures daily as instructed"],
    },
    faqs: [
      { question: "Will dentures look natural?", answer: "Yes — modern dentures are custom-shaded and shaped to closely match natural teeth and gums." },
      { question: "How long do dentures last?", answer: "With proper care, dentures typically last 5–10 years before needing replacement or relining." },
      { question: "Can I sleep with my dentures in?", answer: "We generally recommend removing dentures at night to let your gums rest and to keep them clean." },
    ],
    relatedServiceSlugs: ["dental-bridges", "dental-implants", "tooth-extraction"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "surgical",
    icon: "ShieldCheck",
    heroImageUrl: heroImage("1593022356769-11f762e25ed9"),
    heroImageAlt: "Dental implant model showing titanium post and crown",
    metaTitle: "Dental Implants in Ujjain | Permanent Tooth Replacement",
    metaDescription:
      "Long-lasting dental implants in Ujjain — a permanent, natural-looking solution for missing teeth from Dr. Govind Singh & Dr. Preeti Singh.",
    keywords: ["Dental Implants Ujjain", "Tooth Implant Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "The Gold Standard for Missing Teeth",
      paragraphs: [
        "Dental implants replace missing teeth at the root, using a titanium post fused with the jawbone to support a natural-looking crown — the closest thing to your original tooth.",
        "Unlike bridges or dentures, implants don't rely on adjacent teeth and help preserve jawbone density over time.",
      ],
    },
    symptoms: {
      heading: "When Implants May Be Right for You",
      items: [
        "A single missing tooth you'd like replaced permanently",
        "Multiple missing teeth without wanting a removable option",
        "Loose or uncomfortable dentures",
        "Adequate jawbone density (assessed during consultation)",
      ],
    },
    benefits: {
      heading: "Benefits of Dental Implants",
      items: [
        "Look, feel, and function like natural teeth",
        "Don't require altering adjacent healthy teeth",
        "Help preserve jawbone and facial structure",
        "Durable, long-term solution with proper care",
      ],
    },
    treatmentProcess: {
      heading: "The Implant Journey",
      steps: [
        { step: 1, title: "Consultation & Planning", description: "Imaging assesses bone density and plans precise implant placement." },
        { step: 2, title: "Implant Placement", description: "The titanium post is surgically placed into the jawbone." },
        { step: 3, title: "Healing & Osseointegration", description: "The implant fuses with the bone over a few months." },
        { step: 4, title: "Abutment & Crown", description: "A custom crown is attached to complete your new tooth." },
      ],
    },
    recovery: {
      heading: "Healing After Implant Surgery",
      paragraphs: ["Mild swelling and discomfort for a few days after placement is normal; full osseointegration takes several months before the final crown is fitted."],
      tips: ["Stick to soft foods for the first week", "Avoid smoking, which can slow healing", "Maintain excellent oral hygiene around the implant site"],
    },
    faqs: [
      { question: "Is the implant procedure painful?", answer: "The surgery is performed under local anesthesia; most patients report only mild discomfort during recovery, managed with standard pain relief." },
      { question: "How long do dental implants last?", answer: "With good oral hygiene, implants can last 15–25 years or even a lifetime." },
      { question: "Am I a candidate for implants?", answer: "Most healthy adults with adequate jawbone density are candidates — we'll confirm this with an examination and imaging during consultation." },
    ],
    relatedServiceSlugs: ["dental-crowns", "tooth-extraction", "dentures"],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "cosmetic",
    icon: "Sun",
    heroImageUrl: heroImage("1677026010083-78ec7f1b84ed"),
    heroImageAlt: "Professional teeth whitening treatment",
    metaTitle: "Teeth Whitening in Ujjain | Professional Whitening Treatment",
    metaDescription:
      "Safe, effective professional teeth whitening in Ujjain for a brighter, more confident smile — faster and longer-lasting than over-the-counter kits.",
    keywords: ["Teeth Whitening Ujjain", "Smile Brightening Ujjain", "Cosmetic Dentist Ujjain"],
    overview: {
      heading: "A Brighter Smile, Safely",
      paragraphs: [
        "Professional teeth whitening lifts years of staining from coffee, tea, and everyday wear using stronger, dentist-supervised whitening agents than over-the-counter products.",
        "The result is a noticeably brighter smile achieved safely, without damaging enamel.",
      ],
    },
    symptoms: {
      heading: "Good Candidates for Whitening",
      items: [
        "Yellowing or staining from food, drinks, or tobacco",
        "Teeth that have dulled with age",
        "Wanting a brighter smile for an event or occasion",
        "Frustration with limited results from store-bought kits",
      ],
    },
    benefits: {
      heading: "Benefits of Professional Whitening",
      items: [
        "Faster, more dramatic results than at-home kits",
        "Supervised by a dentist for safety and even results",
        "Long-lasting brightness with proper maintenance",
        "Boosts confidence in your smile",
      ],
    },
    treatmentProcess: {
      heading: "The Whitening Process",
      steps: [
        { step: 1, title: "Shade Assessment", description: "We record your current shade to track results." },
        { step: 2, title: "Protection", description: "Gums and soft tissue are protected before treatment." },
        { step: 3, title: "Whitening Application", description: "A professional-grade whitening agent is applied and activated." },
        { step: 4, title: "Final Shade Check", description: "Results are compared and touch-ups discussed if needed." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["Some temporary sensitivity to hot or cold is common for a day or two after whitening."],
      tips: ["Avoid staining foods and drinks (coffee, tea, red wine) for 48 hours", "Use a sensitivity toothpaste if needed"],
    },
    faqs: [
      { question: "How much whiter will my teeth get?", answer: "Results vary, but most patients see several shades of improvement in a single session." },
      { question: "Does whitening damage enamel?", answer: "No — professional whitening, done under dental supervision, is safe for enamel when used as directed." },
      { question: "How long do results last?", answer: "Results typically last 6 months to 2 years depending on diet and habits like smoking or coffee consumption." },
    ],
    relatedServiceSlugs: ["smile-makeover", "veneers", "teeth-cleaning"],
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    category: "cosmetic",
    icon: "WandSparkles",
    heroImageUrl: heroImage("1489278353717-f64c6ee8a4d2"),
    heroImageAlt: "Smile makeover cosmetic dentistry results",
    metaTitle: "Smile Makeover in Ujjain | Complete Cosmetic Transformation",
    metaDescription:
      "Transform your smile with a personalized smile makeover in Ujjain combining whitening, veneers, and other cosmetic treatments.",
    keywords: ["Smile Makeover Ujjain", "Cosmetic Dentist Ujjain", "Dental Makeover Ujjain"],
    overview: {
      heading: "A Personalized Path to Your Dream Smile",
      paragraphs: [
        "A smile makeover combines multiple cosmetic and restorative treatments — whitening, veneers, crowns, or alignment — into one personalized plan tailored to your goals.",
        "We start by understanding what you'd like to change, then design a treatment sequence that delivers a natural, confident result.",
      ],
    },
    symptoms: {
      heading: "Is a Smile Makeover Right for You?",
      items: [
        "Unhappy with the color, shape, or alignment of your teeth",
        "Multiple cosmetic concerns you'd like addressed together",
        "Chipped, worn, or unevenly sized teeth",
        "Wanting a confident smile for personal or professional reasons",
      ],
    },
    benefits: {
      heading: "Benefits of a Smile Makeover",
      items: [
        "One cohesive plan instead of piecemeal treatments",
        "Combines cosmetic and functional improvements",
        "Boosts confidence in your appearance",
        "Results tailored to your face and preferences",
      ],
    },
    treatmentProcess: {
      heading: "The Smile Makeover Journey",
      steps: [
        { step: 1, title: "Smile Consultation", description: "We discuss your goals and evaluate your current smile." },
        { step: 2, title: "Treatment Planning", description: "A personalized combination of treatments is designed." },
        { step: 3, title: "Treatment Phases", description: "Procedures are carried out in a planned, comfortable sequence." },
        { step: 4, title: "Final Reveal", description: "We review your completed smile and any maintenance guidance." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["Recovery depends on the specific treatments included in your plan — we'll walk you through aftercare for each step."],
    },
    faqs: [
      { question: "How long does a smile makeover take?", answer: "Timelines vary from a few weeks to a few months depending on the treatments involved." },
      { question: "What treatments are typically included?", answer: "Common combinations include whitening, veneers, crowns, and minor alignment — customized to your goals." },
      { question: "Is a smile makeover expensive?", answer: "Cost depends on the treatments chosen; we provide transparent pricing and can phase treatment to fit your budget." },
    ],
    relatedServiceSlugs: ["veneers", "teeth-whitening", "dental-crowns"],
  },
  {
    slug: "veneers",
    name: "Veneers",
    category: "cosmetic",
    icon: "Gem",
    heroImageUrl: heroImage("1654373535457-383a0a4d00f9"),
    heroImageAlt: "Porcelain dental veneers on model teeth",
    metaTitle: "Dental Veneers in Ujjain | Porcelain Veneers",
    metaDescription:
      "Thin, natural-looking porcelain veneers in Ujjain to correct chips, gaps, discoloration, and uneven teeth.",
    keywords: ["Dental Veneers Ujjain", "Porcelain Veneers Ujjain", "Cosmetic Dentist Ujjain"],
    overview: {
      heading: "Thin Shells, Dramatic Results",
      paragraphs: [
        "Veneers are thin, custom-made shells bonded to the front of teeth to correct chips, gaps, discoloration, or uneven shapes — creating a uniform, natural-looking smile.",
        "They're a minimally invasive way to achieve significant cosmetic improvement while preserving most of your natural tooth structure.",
      ],
    },
    symptoms: {
      heading: "Good Candidates for Veneers",
      items: [
        "Chipped or slightly misaligned front teeth",
        "Gaps between teeth",
        "Permanent staining that doesn't respond to whitening",
        "Uneven tooth shape or size",
      ],
    },
    benefits: {
      heading: "Benefits of Veneers",
      items: [
        "Natural-looking, stain-resistant results",
        "Corrects multiple cosmetic issues at once",
        "Preserves more natural tooth than crowns",
        "Long-lasting with proper care",
      ],
    },
    treatmentProcess: {
      heading: "The Veneer Process",
      steps: [
        { step: 1, title: "Consultation & Design", description: "We plan the shape, size, and shade of your veneers." },
        { step: 2, title: "Tooth Preparation", description: "A thin layer of enamel is prepared to fit the veneer." },
        { step: 3, title: "Impressions", description: "Precise molds are sent for custom veneer fabrication." },
        { step: 4, title: "Bonding", description: "Veneers are bonded permanently and polished for a natural finish." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["Minimal adjustment period — most patients adapt to veneers within a few days."],
      tips: ["Avoid biting hard objects like ice or pens", "Maintain regular brushing and flossing"],
    },
    faqs: [
      { question: "Are veneers permanent?", answer: "Veneers are a long-term solution and require removing a thin layer of enamel, making the process essentially irreversible." },
      { question: "How long do veneers last?", answer: "Porcelain veneers typically last 10–15 years or more with good care." },
      { question: "Do veneers stain?", answer: "Porcelain veneers are highly stain-resistant, though maintaining good oral hygiene helps preserve their appearance." },
    ],
    relatedServiceSlugs: ["smile-makeover", "teeth-whitening", "dental-crowns"],
  },
  {
    slug: "braces",
    name: "Braces",
    category: "orthodontic",
    icon: "Grid2x2Plus",
    heroImageUrl: heroImage("1656514894252-fb336a3ad6a6"),
    heroImageAlt: "Orthodontic braces on teeth",
    metaTitle: "Braces in Ujjain | Orthodontic Treatment for All Ages",
    metaDescription:
      "Effective orthodontic braces in Ujjain to straighten teeth and correct bite issues for children, teens, and adults.",
    keywords: ["Braces Ujjain", "Orthodontist Ujjain", "Teeth Straightening Ujjain"],
    overview: {
      heading: "Straighter Teeth, Better Bite",
      paragraphs: [
        "Braces gradually move teeth into proper alignment using brackets and wires, correcting crowding, gaps, and bite issues for a healthier, more confident smile.",
        "We offer orthodontic treatment for children, teens, and adults, with regular adjustments to keep treatment on track.",
      ],
    },
    symptoms: {
      heading: "Signs You May Need Braces",
      items: [
        "Crowded or overlapping teeth",
        "Noticeable gaps between teeth",
        "An overbite, underbite, or crossbite",
        "Difficulty chewing or speaking clearly due to alignment",
      ],
    },
    benefits: {
      heading: "Benefits of Orthodontic Treatment",
      items: [
        "Straighter teeth that are easier to clean",
        "Improved bite function and reduced strain",
        "Reduced risk of uneven wear and jaw discomfort",
        "A more confident smile",
      ],
    },
    treatmentProcess: {
      heading: "The Braces Journey",
      steps: [
        { step: 1, title: "Orthodontic Assessment", description: "X-rays and impressions assess alignment and bite." },
        { step: 2, title: "Treatment Planning", description: "A customized plan and timeline is created." },
        { step: 3, title: "Braces Placement", description: "Brackets and wires are fitted to begin gradual movement." },
        { step: 4, title: "Regular Adjustments", description: "Periodic visits fine-tune tension and progress." },
        { step: 5, title: "Retainer Phase", description: "A retainer maintains your new smile after braces come off." },
      ],
    },
    recovery: {
      heading: "Living With Braces",
      paragraphs: ["Mild discomfort after placement and adjustments is normal and typically subsides within a few days."],
      tips: ["Avoid sticky or hard foods that can damage brackets", "Brush and floss thoroughly around brackets and wires"],
    },
    faqs: [
      { question: "How long does treatment with braces take?", answer: "Treatment time varies by case, typically ranging from 12 to 24 months." },
      { question: "Are braces only for children?", answer: "No — braces are effective at any age, and many adults successfully complete orthodontic treatment." },
      { question: "Do braces hurt?", answer: "You may feel mild pressure or soreness for a few days after placement or adjustment, which is normal and temporary." },
    ],
    relatedServiceSlugs: ["invisalign", "general-dentistry"],
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    category: "orthodontic",
    icon: "CircleDashed",
    heroImageUrl: heroImage("1564420228450-d9a5bc8d6565"),
    heroImageAlt: "Clear aligner tray for Invisalign treatment",
    metaTitle: "Invisalign & Clear Aligners in Ujjain",
    metaDescription:
      "Straighten your teeth discreetly with clear aligner (Invisalign-style) treatment in Ujjain — comfortable, removable, and nearly invisible.",
    keywords: ["Invisalign Ujjain", "Clear Aligners Ujjain", "Orthodontist Ujjain"],
    overview: {
      heading: "Straighten Teeth Discreetly",
      paragraphs: [
        "Clear aligner treatment straightens teeth using a series of custom, removable, nearly invisible trays — a discreet alternative to traditional metal braces.",
        "Aligners are comfortable, easy to clean around, and can be removed for eating and special occasions.",
      ],
    },
    symptoms: {
      heading: "Good Candidates for Clear Aligners",
      items: [
        "Mild to moderate crowding or spacing",
        "Wanting a discreet alignment option for work or social settings",
        "Adults or teens who prefer a removable appliance",
        "Prior orthodontic relapse needing minor correction",
      ],
    },
    benefits: {
      heading: "Benefits of Clear Aligners",
      items: [
        "Virtually invisible compared to metal braces",
        "Removable for eating, brushing, and flossing",
        "Smooth, comfortable fit with no metal brackets",
        "Predictable results with digital treatment planning",
      ],
    },
    treatmentProcess: {
      heading: "The Clear Aligner Process",
      steps: [
        { step: 1, title: "Consultation & Scans", description: "Digital impressions map your current alignment." },
        { step: 2, title: "Treatment Plan", description: "A custom sequence of aligner trays is designed." },
        { step: 3, title: "Wearing Aligners", description: "Each tray is worn for about two weeks before switching to the next." },
        { step: 4, title: "Progress Checks", description: "Periodic visits confirm treatment is progressing as planned." },
      ],
    },
    recovery: {
      heading: "Living With Aligners",
      paragraphs: ["Mild pressure when switching to a new tray is normal and typically fades within a day or two."],
      tips: ["Wear aligners 20–22 hours per day for best results", "Remove before eating or drinking anything besides water"],
    },
    faqs: [
      { question: "How long does clear aligner treatment take?", answer: "Treatment time varies by case, typically ranging from 6 to 18 months." },
      { question: "Are clear aligners as effective as braces?", answer: "For mild to moderate cases, aligners are highly effective; more complex cases may still be better suited to traditional braces." },
      { question: "Can I eat with aligners in?", answer: "Aligners should be removed before eating or drinking anything other than water to avoid staining or damage." },
    ],
    relatedServiceSlugs: ["braces", "teeth-whitening"],
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    category: "pediatric",
    icon: "Baby",
    heroImageUrl: heroImage("1677728401315-afb604c2186d"),
    heroImageAlt: "Gentle pediatric dental checkup for a child",
    metaTitle: "Pediatric Dentist in Ujjain | Kids Dental Care",
    metaDescription:
      "Gentle, child-friendly pediatric dentistry in Ujjain from Dr. Preeti Singh — checkups, cleanings, and preventive care for kids.",
    keywords: ["Pediatric Dentist Ujjain", "Kids Dentist Ujjain", "Children Dental Care Ujjain"],
    overview: {
      heading: "Gentle Dental Care for Children",
      paragraphs: [
        "Pediatric dentistry focuses on the unique dental needs of infants, children, and teens, in a friendly, reassuring environment designed to make dental visits a positive experience.",
        "Dr. Preeti Singh has a special interest in working with children, using a gentle, patient approach to build comfort and confidence from an early age.",
      ],
    },
    symptoms: {
      heading: "When to Bring Your Child In",
      items: [
        "First tooth eruption or by their first birthday",
        "Complaints of tooth pain or sensitivity",
        "Visible cavities or discoloration on baby teeth",
        "Thumb-sucking or other habits affecting tooth alignment",
      ],
    },
    benefits: {
      heading: "Benefits of Early Dental Care",
      items: [
        "Establishes positive dental habits early",
        "Catches developmental issues before they worsen",
        "Reduces dental anxiety through gentle, familiar care",
        "Protects both baby teeth and developing permanent teeth",
      ],
    },
    treatmentProcess: {
      heading: "A Child-Friendly Visit",
      steps: [
        { step: 1, title: "Warm Welcome", description: "We help your child feel comfortable before any examination begins." },
        { step: 2, title: "Gentle Examination", description: "A friendly, age-appropriate check of teeth and gums." },
        { step: 3, title: "Preventive Care", description: "Cleaning, fluoride, or sealants as appropriate for their age." },
        { step: 4, title: "Parent Guidance", description: "Tips on brushing, diet, and habits to support healthy teeth at home." },
      ],
    },
    recovery: {
      heading: "After the Visit",
      paragraphs: ["Most pediatric visits require no downtime — children can return to school or play right away."],
    },
    faqs: [
      { question: "When should my child's first dental visit be?", answer: "We recommend a first visit by their first birthday or within six months of the first tooth appearing." },
      { question: "Do baby teeth really need treatment if they'll fall out?", answer: "Yes — baby teeth guide permanent teeth into position and support chewing and speech, so cavities should still be treated." },
      { question: "How can I help my child feel comfortable at the dentist?", answer: "Bringing them early for friendly checkups (before any problems arise) helps build positive associations with dental visits." },
    ],
    relatedServiceSlugs: ["dental-checkups", "teeth-cleaning", "gum-treatment"],
  },
  {
    slug: "gum-treatment",
    name: "Gum Treatment",
    category: "general",
    icon: "HeartPulse",
    heroImageUrl: heroImage("1662837625420-2b5fbaacec98"),
    heroImageAlt: "Periodontal gum treatment procedure",
    metaTitle: "Gum Treatment in Ujjain | Periodontal Care",
    metaDescription:
      "Effective gum disease treatment in Ujjain — from scaling and root planing to advanced periodontal care for healthier gums.",
    keywords: ["Gum Treatment Ujjain", "Periodontist Ujjain", "Gum Disease Treatment Ujjain"],
    overview: {
      heading: "Protecting the Foundation of Your Smile",
      paragraphs: [
        "Healthy gums are the foundation of a healthy mouth. Gum treatment addresses gingivitis and periodontal disease, ranging from professional deep cleaning to more advanced periodontal therapy.",
        "Left untreated, gum disease can lead to tooth loss and has been linked to broader health issues — early treatment makes a significant difference.",
      ],
    },
    symptoms: {
      heading: "Signs of Gum Disease",
      items: [
        "Red, swollen, or tender gums",
        "Bleeding while brushing or flossing",
        "Persistent bad breath",
        "Gums pulling away from teeth",
        "Loose or shifting teeth",
      ],
    },
    benefits: {
      heading: "Benefits of Gum Treatment",
      items: [
        "Stops gum disease progression",
        "Reduces bleeding, swelling, and discomfort",
        "Protects against tooth loss",
        "Supports overall health, not just oral health",
      ],
    },
    treatmentProcess: {
      heading: "The Gum Treatment Process",
      steps: [
        { step: 1, title: "Periodontal Assessment", description: "Gum pockets are measured to assess disease severity." },
        { step: 2, title: "Scaling & Root Planing", description: "Deep cleaning removes plaque and tartar below the gumline." },
        { step: 3, title: "Treatment", description: "Additional therapy is provided for more advanced cases as needed." },
        { step: 4, title: "Maintenance Plan", description: "A follow-up schedule helps keep gum disease from returning." },
      ],
    },
    recovery: {
      heading: "Aftercare",
      paragraphs: ["Some tenderness for a few days after deep cleaning is normal and improves quickly with good home care."],
      tips: ["Use a soft-bristled toothbrush during recovery", "Follow any prescribed rinses or medication as directed"],
    },
    faqs: [
      { question: "Is gum treatment painful?", answer: "We use local anesthesia when needed for deep cleaning, keeping the procedure comfortable." },
      { question: "Can gum disease be reversed?", answer: "Early-stage gingivitis is often reversible with professional treatment and improved home care; more advanced disease can be effectively managed." },
      { question: "How often will I need follow-up cleanings?", answer: "Patients with a history of gum disease often benefit from cleanings every 3–4 months instead of the standard six." },
    ],
    relatedServiceSlugs: ["teeth-cleaning", "dental-checkups"],
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    category: "surgical",
    icon: "AlertTriangle",
    heroImageUrl: heroImage("1663182106210-2d372c45ed23"),
    heroImageAlt: "Wisdom tooth extraction X-ray and procedure",
    metaTitle: "Wisdom Tooth Removal in Ujjain | Safe Extraction",
    metaDescription:
      "Safe, comfortable wisdom tooth removal in Ujjain for impacted or problematic third molars, with clear aftercare guidance.",
    keywords: ["Wisdom Tooth Removal Ujjain", "Wisdom Tooth Extraction Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Relief From Impacted or Problematic Wisdom Teeth",
      paragraphs: [
        "Wisdom teeth often don't have enough room to emerge properly, leading to impaction, pain, or crowding. Removal relieves discomfort and prevents complications.",
        "We evaluate each case with imaging to plan a safe, efficient extraction with minimal discomfort.",
      ],
    },
    symptoms: {
      heading: "Signs Your Wisdom Teeth Need Attention",
      items: [
        "Pain or swelling at the back of the jaw",
        "Difficulty opening your mouth fully",
        "Red or swollen gums around the back molars",
        "Crowding or shifting of nearby teeth",
        "Recurring infections near the back of the mouth",
      ],
    },
    benefits: {
      heading: "Benefits of Timely Removal",
      items: [
        "Relieves pain and pressure",
        "Prevents infection and damage to adjacent teeth",
        "Reduces risk of crowding and shifting",
        "Avoids more complex complications later",
      ],
    },
    treatmentProcess: {
      heading: "The Removal Procedure",
      steps: [
        { step: 1, title: "Imaging & Assessment", description: "X-rays determine the position and difficulty of removal." },
        { step: 2, title: "Numbing", description: "Local anesthesia (with sedation options if needed) ensures comfort." },
        { step: 3, title: "Extraction", description: "The wisdom tooth is carefully removed." },
        { step: 4, title: "Aftercare Guidance", description: "Clear instructions support smooth, infection-free healing." },
      ],
    },
    recovery: {
      heading: "Healing After Wisdom Tooth Removal",
      paragraphs: ["Swelling and mild discomfort for 3–5 days is normal, improving steadily with proper aftercare."],
      tips: [
        "Use ice packs to manage swelling in the first 24 hours",
        "Stick to soft, cool foods for the first few days",
        "Avoid smoking, straws, and vigorous rinsing while healing",
      ],
    },
    faqs: [
      { question: "Do all wisdom teeth need to be removed?", answer: "Not always — some erupt properly and cause no issues. Removal is recommended when they're impacted, painful, or causing crowding." },
      { question: "Is wisdom tooth removal painful?", answer: "The procedure is performed under anesthesia; post-procedure discomfort is normal but well-managed with prescribed care." },
      { question: "How long is recovery?", answer: "Most patients recover within a week, with initial swelling subsiding in the first few days." },
    ],
    relatedServiceSlugs: ["tooth-extraction", "emergency-dental-care"],
  },
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    category: "emergency",
    icon: "Siren",
    heroImageUrl: heroImage("1602932213623-cc17e9541bb4"),
    heroImageAlt: "Emergency dental care and urgent treatment",
    metaTitle: "Emergency Dentist in Ujjain | Urgent Dental Care",
    metaDescription:
      "Urgent emergency dental care in Ujjain for severe toothache, broken teeth, and dental trauma — including care for visitors to Ujjain.",
    keywords: ["Emergency Dentist Ujjain", "Urgent Dental Care Ujjain", "Dentist in Ujjain"],
    overview: {
      heading: "Fast Relief When You Need It Most",
      paragraphs: [
        "Dental emergencies — severe pain, a knocked-out or broken tooth, or an injury — need prompt attention. We prioritize emergency cases to relieve pain and prevent further damage quickly.",
        "We also welcome visitors to Ujjain experiencing a dental emergency while away from their regular dentist.",
      ],
    },
    symptoms: {
      heading: "What Counts as a Dental Emergency",
      items: [
        "Severe, sudden tooth pain",
        "A knocked-out or badly broken tooth",
        "Uncontrolled bleeding in the mouth",
        "Swelling that's spreading or affecting breathing/swallowing",
        "A lost filling or crown causing pain",
      ],
    },
    benefits: {
      heading: "Why Prompt Emergency Care Matters",
      items: [
        "Relieves severe pain quickly",
        "Improves chances of saving a knocked-out or damaged tooth",
        "Prevents infection from spreading",
        "Available for both regular patients and visitors to Ujjain",
      ],
    },
    treatmentProcess: {
      heading: "What to Do & What to Expect",
      steps: [
        { step: 1, title: "Call Immediately", description: "Contact the clinic right away for guidance and to arrange urgent care." },
        { step: 2, title: "Urgent Assessment", description: "We prioritize your visit and assess the issue quickly." },
        { step: 3, title: "Pain Relief & Stabilization", description: "Immediate steps are taken to relieve pain and stabilize the situation." },
        { step: 4, title: "Definitive Treatment", description: "Follow-up treatment (filling, root canal, extraction, etc.) is planned as needed." },
      ],
    },
    recovery: {
      heading: "After Emergency Treatment",
      paragraphs: ["Recovery depends on the specific emergency and treatment provided — we'll give you clear, specific aftercare guidance."],
      tips: ["Keep a knocked-out tooth moist (in milk or saliva) and come in immediately", "Apply a cold compress to manage swelling en route"],
    },
    faqs: [
      { question: "What should I do if a tooth gets knocked out?", answer: "Keep the tooth moist (in milk or your own saliva), avoid touching the root, and get to the clinic as quickly as possible — ideally within 30 minutes." },
      { question: "Do you see emergency patients same-day?", answer: "Yes, we prioritize dental emergencies and do our best to see you the same day you call." },
      { question: "Can visitors to Ujjain be treated for emergencies?", answer: "Absolutely — we welcome visitors experiencing a dental emergency while in Ujjain." },
    ],
    relatedServiceSlugs: ["tooth-extraction", "root-canal-treatment", "wisdom-tooth-removal"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

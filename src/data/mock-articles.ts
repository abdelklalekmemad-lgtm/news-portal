import type { Article, Category } from "@/types";

export const mockCategories: Category[] = [
  { id: "c1", slug: "politics", name: "سياسة" },
  { id: "c2", slug: "economy", name: "اقتصاد" },
  { id: "c3", slug: "sports", name: "رياضة" },
  { id: "c4", slug: "tech", name: "تكنولوجيا" },
];

const authors = [
  { id: "a1", name: "سارة أحمد" },
  { id: "a2", name: "محمود علي" },
  { id: "a3", name: "ليلى حسن" },
];

const cover = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/500`;

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "government-new-economic-measures",
    title: "إعلان عن حزمة إجراءات اقتصادية جديدة لدعم الأسواق المحلية",
    excerpt:
      "تتضمن الحزمة تحفيزات للقطاع الاستثماري وتسهيلات للمشروعات الصغيرة مع متابعة لأثرها على التضخم.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80&auto=format&fit=crop",
    publishedAt: "2026-04-07T09:00:00.000Z",
    category: mockCategories[1],
    author: authors[0],
    readMinutes: 6,
    featured: true,
    trending: true,
    bodyHtml: `
      <p>أعلنت الجهات المختصة عن مجموعة من الإجراءات الهادفة إلى دعم الاستقرار الاقتصادي وتوسيع قاعدة المشاركة في النمو.</p>
      <p>وتشمل المبادرة تسهيلات إدارية وإطاراً لمراجعة دورية للأثر على المستهلكين والمشروعات الناشئة.</p>
      <h2>محاور التنفيذ</h2>
      <ul>
        <li>تحسين التمويل للمشروعات متناهية الصغر</li>
        <li>تعزيز الشفافية في الإعلانات الرسمية</li>
      </ul>
    `,
  },
  {
    id: "2",
    slug: "national-team-friendly-preparation",
    title: "المنتخب يستعد لمواجهة ودية أمام منافس قوي الأسبوع المقبل",
    excerpt:
      "معسكر إعداد مكثف يضم تجارب تكتيكية للاعبين الشباب، مع تركيز على التنظيم الدفاعي والانتقالات السريعة.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop",
    publishedAt: "2026-04-07T07:30:00.000Z",
    category: mockCategories[2],
    author: authors[1],
    readMinutes: 4,
    featured: true,
    trending: true,
    bodyHtml: `
      <p>أعلن الجهاز الفني عن البرنامج التدريبي للمرحلة القادمة، مع تنويع التدريبات بين الفردية والجماعية.</p>
    `,
  },
  {
    id: "3",
    slug: "ai-local-startups",
    title: "شركات ناشئة محلية تقدم حلول ذكاء اصطناعي للقطاع الصحي",
    excerpt:
      "شراكات بين مستشفيات ومطورين للتشخيص المساعد وإدارة المواعيد، مع إطار للحوكمة وخصوصية البيانات.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
    publishedAt: "2026-04-06T18:15:00.000Z",
    category: mockCategories[3],
    author: authors[2],
    readMinutes: 7,
    trending: true,
    bodyHtml: `<p>تُظهر التجارب الأولى تحسناً في أوقات الانتظار ودقة التسجيل الإلكتروني للمقاييس.</p>`,
  },
  {
    id: "4",
    slug: "parliament-session-agenda",
    title: "جلسة برلمانية لمناقشة مشروعات البنية التحتية في المحافظات",
    excerpt:
      "جدول أعمال يشمل الطرق والمحطات والصرف الصحي، مع آلية متابعة للتنفيذ على المدى المتوسط.",
    coverImageUrl: cover("news-4"),
    publishedAt: "2026-04-06T12:00:00.000Z",
    category: mockCategories[0],
    author: authors[0],
    readMinutes: 5,
    bodyHtml: `<p>تُناقش اللجان المختصة الأولويات التمويلية ومعايير الجودة.</p>`,
  },
  {
    id: "5",
    slug: "currency-markets-weekly",
    title: "أسواق العملات: تقلبات محدودة مع ترقب لبيانات التضخم",
    excerpt:
      "تحليلات تشير إلى استقرار نسبي في الجلسات الأخيرة، مع إشارات من المستثمرين إلى توزيع المخاطر.",
    coverImageUrl: cover("news-5"),
    publishedAt: "2026-04-05T22:45:00.000Z",
    category: mockCategories[1],
    author: authors[1],
    readMinutes: 8,
    bodyHtml: `<p>تُراجع الأسواق توقعات التضخم والسياسة النقدية.</p>`,
  },
  {
    id: "6",
    slug: "youth-league-roundup",
    title: "دوري الشباب: نتائج مثيرة وترتيب جديد في المقدمة",
    excerpt:
      "فوزان مهمّان لفرق المقدمة، مع أداء لافت لخط الوسط في مباراة الجولة الماضية.",
    coverImageUrl: cover("news-6"),
    publishedAt: "2026-04-05T16:20:00.000Z",
    category: mockCategories[2],
    author: authors[2],
    readMinutes: 3,
    bodyHtml: `<p>تُحدث النتائج الترتيب قبل جولات حاسمة.</p>`,
  },
  {
    id: "7",
    slug: "cybersecurity-awareness",
    title: "حملة توعية بالأمن السيبراني تستهدف المشروعات الصغيرة",
    excerpt:
      "ورش عمل مجانية ونشرة إرشادات لحماية الحسابات والنسخ الاحتياطي، مع التركيز على التصيد الاحتيالي.",
    coverImageUrl: cover("news-7"),
    publishedAt: "2026-04-04T10:00:00.000Z",
    category: mockCategories[3],
    author: authors[0],
    readMinutes: 6,
    bodyHtml: `<p>تُقدم الحملة أدوات بسيطة للتحقق من الروابط وإدارة كلمات المرور.</p>`,
  },
  {
    id: "8",
    slug: "regional-diplomacy-update",
    title: "لقاءات دبلوماسية لمناقشة التعاون في الملفات الإقليمية المشتركة",
    excerpt:
      "جولة جديدة من الجهود الدبلوماسية تهدف إلى تهدئة التوترات وتعزيز قنوات الحوار.",
    coverImageUrl: cover("news-8"),
    publishedAt: "2026-04-03T14:30:00.000Z",
    category: mockCategories[0],
    author: authors[1],
    readMinutes: 4,
    bodyHtml: `<p>تُتابع الأطراف الملفات ذات الأولوية.</p>`,
  },
];

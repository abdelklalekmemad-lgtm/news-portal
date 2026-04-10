import { useNavigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="mx-auto max-w-lg py-16 text-center">
        <p className="text-sm font-extrabold text-brand">404</p>
        <h1 className="mt-2 text-3xl font-extrabold text-ink">الصفحة غير موجودة</h1>
        <p className="mt-3 text-ink-muted">
          الرابط قد يكون غير صحيح أو تم نقل المحتوى.
        </p>
        <div className="mt-8 flex justify-center">
          <Button type="button" onClick={() => navigate(ROUTES.home)}>
            العودة للرئيسية
          </Button>
        </div>
      </div>
    </AppShell>
  );
}

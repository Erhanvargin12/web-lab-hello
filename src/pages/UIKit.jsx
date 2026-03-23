import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        UI Kit
      </h1>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Buttons</h2>
        {/* Varyant 1: Renkler */}
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        {/* Varyant 2: Boyutlar */}
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        {/* Varyant: Disabled */}
        <div className="flex flex-wrap items-end gap-3 mt-4">
          <Button variant="primary" disabled>Disabled State</Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Inputs</h2>
        {/* Varyant 3: Normal */}
        <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
        {/* Varyant 4: Hatali */}
        <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
        {/* Varyant 5: Help text */}
        <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
        {/* Varyant 6: Disabled */}
        <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Varyant 7: Elevated */}
          <Card variant="elevated" title="Elevated Card">Golge ile yukseltiilmis kart.</Card>
          {/* Varyant 8: Outlined */}
          <Card variant="outlined" title="Outlined Card">Cerceveli kart.</Card>
          {/* Varyant 9: Filled */}
          <Card variant="filled" title="Filled Card" footer={<Button size="sm" variant="secondary">Detay</Button>}>
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-900 dark:text-white">Alerts</h2>
        <Alert variant="info" title="Bilgi">Bilgilendirme mesaji.</Alert>
        <Alert variant="success" title="Basarili">Islem tamamlandi.</Alert>
        <Alert variant="warning" title="Uyari">Dikkat edilmesi gereken durum.</Alert>
        <Alert variant="error" title="Hata" dismissible onDismiss={() => {}}>Bir hata olustu.</Alert>
      </section>

    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Zap",
      title: "Лазерная резка",
      description: "Высокоточная резка профильных труб с минимальной зоной термического влияния",
      features: ["Толщина до 25мм", "Точность ±0.1мм", "Любая сложность"]
    },
    {
      icon: "Flame", 
      title: "Лазерная сварка",
      description: "Прецизионная сварка металлических конструкций с превосходным качеством шва",
      features: ["Минимальные деформации", "Высокая скорость", "Чистые швы"]
    },
    {
      icon: "Palette",
      title: "Порошковая окраска",
      description: "Полимерное покрытие по каталогу RAL с превосходной адгезией и долговечностью",
      features: ["Каталог RAL", "Экологичность", "Стойкость 15+ лет"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-orange-500" size={28} />
              <span className="text-xl font-bold text-slate-800">LaserTech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">Портфолио</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">О компании</a>
              <a href="#contacts" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/90 z-10"></div>
        <img 
          src="/img/5db55649-2574-4c65-9291-18bd60737140.jpg" 
          alt="Laser cutting equipment" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-400">
              Промышленная точность
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Лазерная обработка
              <span className="block text-orange-400">нового поколения</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Высокоточная резка, сварка и порошковая окраска металлических изделий 
              с использованием передовых лазерных технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть процесс
              </Button>
            </div>
          </div>
        </div>
        
        {/* Geometric Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-20"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 border border-orange-400/30 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 border-2 border-orange-400/40 rotate-45 opacity-30"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Наши услуги</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Полный цикл металлообработки
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              От идеи до готового изделия — используем современное лазерное оборудование 
              для создания продукции высочайшего качества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                    <Icon name={service.icon as any} className="text-orange-500 group-hover:text-white transition-colors" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-slate-600 mb-6 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-slate-500">
                        <Icon name="Check" className="text-green-500 mr-2" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-200 text-slate-700">Портфолио</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Примеры наших работ
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/img/09cc0d63-b7e6-4ad6-b413-5378a7e42a5d.jpg" 
                alt="Before and after laser cutting" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Прецизионная обработка</h3>
              <p className="text-slate-600 leading-relaxed">
                Каждое изделие проходит строгий контроль качества. Точность резки до ±0.1мм 
                гарантирует идеальную геометрию и минимальные отходы материала.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">99.9%</div>
                  <div className="text-sm text-slate-600">Точность</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-slate-600">Производство</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contacts */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700">О компании</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Инновации в металлообработке
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Более 10 лет мы специализируемся на высокоточной лазерной обработке металлов. 
                Современное оборудование и квалифицированные специалисты позволяют нам выполнять 
                заказы любой сложности с гарантией качества.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Award" className="text-orange-500 mr-3" size={20} />
                  <span className="text-slate-700">Сертифицированное производство ISO 9001</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" className="text-orange-500 mr-3" size={20} />
                  <span className="text-slate-700">Более 500 довольных клиентов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="text-orange-500 mr-3" size={20} />
                  <span className="text-slate-700">Сроки выполнения от 1 дня</span>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/img/f5f0c7b5-dc8b-4ec9-b1cc-88dc9ff4ae3e.jpg" 
                alt="Abstract laser technology" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-400">Контакты</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Свяжитесь с нами для получения персонального предложения и консультации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-orange-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-slate-300">+7 (495) 123-45-67</p>
              <p className="text-slate-300">+7 (800) 555-00-99</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-orange-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-300">info@lasertech.ru</p>
              <p className="text-slate-300">order@lasertech.ru</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-orange-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-slate-300">г. Москва, ул. Промышленная, 15</p>
              <p className="text-slate-300">Индустриальный парк "Технопарк"</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Zap" className="text-orange-500" size={24} />
              <span className="text-xl font-bold text-white">LaserTech</span>
            </div>
            <p className="text-slate-400">
              © 2024 LaserTech. Все права защищены. Высокоточная лазерная обработка металлов.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
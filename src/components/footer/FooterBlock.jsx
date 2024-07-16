import ServiceBlock from './ServiceBlock';
import Banner from './Banner';

const FooterBlock = () => {
  return (
    <div className="footer-block">
      <Banner />
      <div className="footer-block__services">
        <ServiceBlock title="Погода">
          <ul>
            <li>Погода в Москве</li>
            <li>Погода в Санкт-Петербурге</li>
            <li>Погода в Казани</li>
          </ul>
        </ServiceBlock>
        <ServiceBlock title="Карта Германии">
          <ul>
            <li>Расписание</li>
            <li>Маршрут</li>
          </ul>
        </ServiceBlock>
        <ServiceBlock title="Эфир">
          <ul>
            <li>Управление как искусство <span>Успех</span></li>
            <li>Ночь. Мир в это время <span>earthTV</span></li>
            <li>Андрей... <span>Совершенно секретно</span></li>
          </ul>
        </ServiceBlock>
        <ServiceBlock title="Посещаемое">
          <ul>
            <li><strong>Недвижимость</strong> - о сталинках</li>
            <li><strong>Маркет</strong> - люстры и светильники</li>
            <li><strong>Авто.ру</strong> - привод 4x4 до 500000</li>
          </ul>
        </ServiceBlock>
        <ServiceBlock title="Телепрограмма">
          <ul>
            <li>2:00 ТНТ. Best <span>ТНТ International</span></li>
            <li>2:15 Джинглики <span>Карусель INT</span></li>
            <li>2:25 Наедине со всеми <span>Первый</span></li>
          </ul>
        </ServiceBlock>
      </div>
    </div>
  );
};

export default FooterBlock;
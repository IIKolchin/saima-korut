import { JewelryItem } from '../types/jewerly';
import korut1 from '../assets/images/korut1.png';
import korut2 from '../assets/images/korut2.png';
import korut3 from '../assets/images/korut3.png';
import korut4 from '../assets/images/korut4.png';

export const jewelryItems: JewelryItem[] = [
  {
    id: '1',
    series: 'AALLOT A',
    name: 'Veneet Korvakorut 301k',
    description: '6x12 mm Zirkon',
    color: 'pinkki',
    price: 45,
    material: '6х12 mm Zirkon',
    images: [korut1, korut2, korut1],
  },
  {
    id: '2',
    series: 'AALLOT A',
    name: 'Серебряные серьги',
    description: 'Изящные серьги из серебра 925 пробы.',
    color: 'pinkki',
    price: 5400,
    material: 'Серебро',
    images: [korut2, korut2, korut2],
  },
  {
    id: '3',
    series: 'AALLOT A',
    name: 'Подвеска с бриллиантом',
    description: 'Элегантная подвеска с бриллиантом.',
    color: 'pinkki',
    price: 25900,
    material: 'Золото',
    images: [korut3, korut1, korut2],
  },
  {
    id: '',
    series: 'AALLOT A',
    name: 'Подвеска с бриллиантом',
    description: 'Элегантная подвеска с бриллиантом.',
    color: 'pinkki',
    price: 25900,
    material: 'Золото',
    images: [korut4, korut4, korut2],
  },
];

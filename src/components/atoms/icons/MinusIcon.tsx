import { ReactComponent as Minus } from '../../../assets/minus-square.svg';
import { SvgProps } from '../../../common/types';

const MinusIcon: React.FC<SvgProps> = ({ className, onClick }) => {
  return <Minus className={className} onClick={onClick} />;
};
export default MinusIcon;

import { ReactComponent as Plus } from '../../../assets/plus-square.svg';
import { SvgProps } from '../../../common/types';

const PlusIcon: React.FC<SvgProps> = ({ className, onClick }) => {
  return (
    <Plus
      style={{ cursor: 'pointer' }}
      className={className}
      onClick={onClick}
    />
  );
};
export default PlusIcon;

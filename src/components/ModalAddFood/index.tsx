import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface Food {
  name: string
  description: string
  price: string
  image: string
}

interface ModalAddFoodProps {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (food: Food) => Promise<void>
}

function ModalAddFood({ isOpen, setIsOpen, handleAddFood}: ModalAddFoodProps) {
  const formRef = useRef(null);

  async function handleSubmit(data: Food) {
    await handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input
          name="image"
          placeholder="Cole o link aqui"
          icon={undefined}
        />

        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          icon={undefined}
        />
        <Input
          name="price"
          placeholder="Ex: 19.90"
          icon={undefined}
        />

        <Input
          name="description"
          placeholder="Descrição"
          icon={undefined}
        />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;

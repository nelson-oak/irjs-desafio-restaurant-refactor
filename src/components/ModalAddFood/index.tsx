import { useRef } from 'react';
import { FiCheckSquare, FiEdit2 } from 'react-icons/fi';

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
          icon={FiEdit2}
        />

        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          icon={FiEdit2}
        />
        <Input
          name="price"
          placeholder="Ex: 19.90"
          icon={FiEdit2}
        />

        <Input
          name="description"
          placeholder="Descrição"
          icon={FiEdit2}
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

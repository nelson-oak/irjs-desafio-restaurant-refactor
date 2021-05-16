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

interface EditingFood {
  id: number
  name: string
  description: string
  price: string
  image: string
  available: boolean
}

interface ModalEditFoodProps {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: EditingFood
  handleUpdateFood: (food: Food) => Promise<void>
}

function ModalEditFood({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditFoodProps) {
  const formRef = useRef(null)

  async function handleSubmit(data: Food) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
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

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;

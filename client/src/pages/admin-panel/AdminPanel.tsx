import CreateBrandModal from '../../component/modal/molecules/CreateBrandModal';
import CreateDeviceModal from '../../component/modal/molecules/CreateDeviceModal';
import CreateTypeModal from '../../component/modal/molecules/CreateTypeModal';
import cl from "./admin-panel.module.css";

const AdminPanel = () => {
	return (
		<div  className={cl.FlexBlock}>
			<div
				className={cl.FlexItem}
			>
				<CreateTypeModal />
			</div>
			<div
				className={cl.FlexItem}
			>
				<CreateBrandModal />
			</div>
			<div
				className={cl.FlexItem}
			>
				<CreateDeviceModal />
			</div>  
		</div>
	);
};

export default AdminPanel;
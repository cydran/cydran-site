import { Component } from "cydran";
import TEMPLATE from "./ModalContainer.html";

interface ModalParams {
	name: string;
	title: string;
	closeable: boolean;
}

class ModalContainer extends Component {

	private title: string;

	private visible: boolean;

	private closeable: boolean;

	constructor() {
		super(TEMPLATE);
		this.on('show').forChannel('modal').invoke(this.showModal);
		this.on('hide').forChannel('modal').invoke(this.hideModal);
	}

	init() {
		this.title = 'Modal Dialog';
		this.visible = false;
		this.closeable = false;
	}

	showModal(payload: ModalParams) {
		this.getLogger().info('Modal opening');
		this.setChildFromRegistry('body', payload.name);
		this.title = payload.title;
		this.closeable = payload.closeable;
		this.visible = true;
	}

	hideModal() {
		this.getLogger().info('Modal closing');
		this.visible = false;
		this.setChild('body', null);
	}
}

export default ModalContainer;

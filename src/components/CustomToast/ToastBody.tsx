import * as React from 'react';
import { CLOSE_COLOR } from 'constants/toastColor';
import SettingsIcon from '@mui/icons-material/Settings';
import './styles.scss';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ToastBody() {
	return (
		<div className="toast__box">
			<div className="toast__box-icon">
				<SettingsIcon />
			</div>
			<div className="toast__box-content">
				<h4>Closed !</h4>
				<p>This feature is currently closed.Try login with Google or Facebook</p>
			</div>
		</div>
	);
}

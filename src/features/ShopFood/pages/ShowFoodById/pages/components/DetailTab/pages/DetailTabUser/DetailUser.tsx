import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import './styles.scss';

function DetailTabUser() {
	const userAvatar = localStorage.getItem('userImg');
	const imgFb = localStorage.getItem('imgFb');

	return (
		<>
			<div className="detail-tab-user">
				<Avatar
					src={userAvatar || imgFb ? userAvatar || imgFb : ('' as any)}
					className="detail-tab-user__avatar"
					alt="Avatar"
				/>

				<form className="detail-tab-user__form">
					<div className="detail-tab-user__row">
						<div className="detail-tab-user__rate">
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
						</div>
					</div>
					<textarea
						className="detail-tab-user__textarea"
						placeholder="Write your comment here..."
					/>
					<Button
						sx={{
							fontSize: '1.2rem !important',
							color: '#fff !important',
							backgroundColor: '#ff514e !important',
							border: 'none !important',
						}}
						className="red detail-tab-user__submit"
					>
						Post comment
					</Button>
				</form>
			</div>
		</>
	);
}

export default DetailTabUser;

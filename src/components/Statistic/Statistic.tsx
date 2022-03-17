import Card from '../Card/Card';
import Title from '../Title/Title';
import styles from './Statistic.module.css';

const Statistic: Function = (): JSX.Element => {
	return (
		<div className={styles.Statistic}>
			<div>
				<Title value="Sales Dashboard"/>
				<Card>
					<div className={styles.Statistic__visualisation}>
					
					</div>
				</Card>
			</div>
			<div>
				<Title value="Sales Dashboard"/>
				<Card>
					<div className={styles.Statistic__table}>
						<table>
							<thead>
							<tr>
								<th>STATUS</th>
								<th>ADV CAMPAIGN</th>
								<th>COSTS</th>
								<th>CLICKS</th>
								<th>CPC</th>
								<th>VISITS</th>
								<th>ORDERS</th>
								<th>ROI</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td><i style={{backgroundColor: '#5a99f9'}}/></td>
								<td>Google Ads</td>
								<td>$354</td>
								<td>354</td>
								<td>3,54</td>
								<td>5000</td>
								<td>500</td>
								<td>500</td>
							</tr>
							<tr>
								<td><i style={{backgroundColor: '#54ca50'}}/></td>
								<td>Facebook</td>
								<td>$354</td>
								<td>354</td>
								<td>3,54</td>
								<td>5000</td>
								<td>500</td>
								<td>500</td>
							</tr>
							<tr>
								<td><i style={{backgroundColor: '#f17173'}}/></td>
								<td>Twitter</td>
								<td>$354</td>
								<td>354</td>
								<td>3,54</td>
								<td>5000</td>
								<td>500</td>
								<td>500</td>
							</tr>
							<tr>
								<td><i style={{backgroundColor: '#7e74fb'}}/></td>
								<td>Organic Search</td>
								<td>$354</td>
								<td>354</td>
								<td>3,54</td>
								<td>5000</td>
								<td>500</td>
								<td>500</td>
							</tr>
							<tr>
								<td><i style={{backgroundColor: '#fecb3f'}}/></td>
								<td>Referral</td>
								<td>$354</td>
								<td>354</td>
								<td>3,54</td>
								<td>5000</td>
								<td>500</td>
								<td>500</td>
							</tr>
							</tbody>
						</table>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Statistic;

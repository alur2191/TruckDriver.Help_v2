import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './index.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.main}>
			{/* Display list of all available jobs */}
			<div className={styles.body}>
				<div className={styles.head}>
					<h1>Портал Логистической Индустрии США</h1>
					<div>
						<Link href={{ pathname: '/jobs' }}>
							<a>
								<div>
									<i className="bi bi-truck-flatbed" />
									<h2>Искать Работу</h2>
									<p>
										Поиск работы в траковых компаниях с помощью расширенных
										фильтров
									</p>
								</div>
							</a>
						</Link>
						<Link href={{ pathname: '/jobs/form' }}>
							<a>
								<div>
									<i className="bi bi-card-list" />
									<h2>Подать Объявление</h2>
									<p>Бесплатное размещение объявлений для траковых компаний</p>
								</div>
							</a>
						</Link>
					</div>
				</div>
				<div className={styles.listings}>
					<Filters />
					{jobs ? (
						jobs.map((job) => (
							<div key={job.id} className="listing">
								<JobListing job={job} />
							</div>
						))
					) : (
						<div className="loader" />
					)}
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							textDecoration: 'underline',
						}}
					>
						<Link href="/jobs">
							<a>Показать ещё...</a>
						</Link>
					</div>
				</div>
				<div>
					<h1>О Проекте TruckDriver.help</h1>
					<iframe
						src="https://www.youtube.com/embed/YqWBkSoaaAs"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
					<p>
						TruckDriver.help это уникальный онлайн проект нацеленный помочь
						иммигрантам работающим в траковой индустрии. На данный момент
						основная платформа состоит из объявлений логистических компаний.
						Желающие найти работу в индустрии, смогут воспользоваться
						расширенными фильтрами предоставленные на сайте, для поиска работы
						по указанным критериям.
					</p>
				</div>
			</div>
			<aside className={styles.sidebar}>
				{/* Temporarily disabled */}
				{/* <AdvancedSearch /> */}

				{/* Auth Form */}
				{activeUser && activeUser.user.company ? (
					<Link href={{ pathname: '/jobs/form' }} passHref>
						<button>Подать Объявление</button>
					</Link>
				) : (
					activeUser
					&& activeUser.user
					&& !activeUser.user.company
					&& activeUser.user.activated && (
						<Link href={{ pathname: '/company/form' }} passHref>
							<button>Зарегистрировать Компанию</button>
						</Link>
					)
				)}
				<Sidebar />
			</aside>
		</div>
	);
};

export default Home;

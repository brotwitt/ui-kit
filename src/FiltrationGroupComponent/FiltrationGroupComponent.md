```jsx
<div style={{}}>
	<FiltrationGroupComponent
		groupType=""
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType=""
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="есть такие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Цена"
									filtrationMethodName="заполнена и от"
									filtrationMethodParametersComponent={
										<span style={{ fontWeight: "bold" }}>
											5000
										</span>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
					<FiltrationConditionComponent
						filtrationObjectName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												90 дней{" "}
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>

		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={false}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="нет таких"
					/>
					<FiltrationConditionComponent
						filtrationObjectName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												14 дней{" "}
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<FiltrationGroupComponent
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="or"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="есть такие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Цена"
									filtrationMethodName="заполнена и от"
									filtrationMethodParametersComponent={
										<span style={{ fontWeight: "bold" }}>
											5000
										</span>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
					<FiltrationConditionComponent
						filtrationObjectName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												90 дней{" "}
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>

		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={false}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="нет таких"
					/>
					<FiltrationConditionComponent
						filtrationObjectName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												14 дней{" "}
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<FiltrationConditionComponent
		linkedConditionComponent={
			<FiltrationGroupComponent
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponent
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и "
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Мужской</span>
					}
				/>
				<Button
					size={"small"}
					color={"gray"}
					className="kit-filter__btn"
				>
					Добавить группу
				</Button>
			</FiltrationGroupComponent>
		}
	/>

	<br />
	<br />

	<FiltrationGroupComponent
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="or"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="есть такие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Цена"
									filtrationMethodName="заполнена и от"
									filtrationMethodParametersComponent={
										<span style={{ fontWeight: "bold" }}>
											5000
										</span>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
					<FiltrationConditionComponent
						filtrationObjectName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												90 дней{" "}
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>

		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={false}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="нет таких"
					/>
					<FiltrationConditionComponent
						filtrationObjectName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												14 дней{" "}
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>

		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<FiltrationConditionComponent
		linkedConditionComponent={
			<FiltrationGroupComponent
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponent
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и "
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Мужской</span>
					}
				/>
				<FiltrationConditionComponent
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и "
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Женский</span>
					}
				/>
			</FiltrationGroupComponent>
		}
	/>
	<FiltrationConditionComponent
		filtrationObjectName="Пол"
		filtrationMethodName="заполнен и "
		filtrationMethodParametersComponent={
			<span style={{ fontWeight: "bold", fontSize: "14px" }}>
				Женский
			</span>
		}
	/>
	<FiltrationConditionComponent />
</div>
```

import * as React from "react";
import Step from "../Step";
import Alert from "../Alert";
import Wrapper from "../Wrapper";
import Control from "../Control";

// Legacy, broken

export const Steps = ({ steps, isStatic }) => {
	const scrollWrapper = React.useRef(null);
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [stepPositions, setStepPositions] = React.useState([]);
	const [paddingBottom, setPaddingBottom] = React.useState(0);
	const containerElem = React.useRef(({ children }) =>
		isStatic ? (
			<>{children}</>
		) : (
			<Wrapper.Scroll
				outerProps={{ scrollEnabled: false }}
				innerProps={{ style: { paddingBottom } }}
				ref={scrollWrapper}
			>
				{children}
			</Wrapper.Scroll>
		)
	);

	const handleUp = () =>
		setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);
	const handleDown = () =>
		setActiveIndex(
			activeIndex < steps.length - 1 ? activeIndex + 1 : activeIndex
		);

	React.useEffect(() => {
		if (scrollWrapper.current) {
			scrollWrapper.current.scrollTo({ y: stepPositions[activeIndex] });
		}
	}, [activeIndex]);

	React.useEffect(() => {
		if (
			stepPositions.indexOf() === -1 && // This means "indexOf(undefined)"
			stepPositions.length === steps.length &&
			stepPositions.slice(0, -1).length > 2
		) {
			try {
				// Don't count last element
				const sum = stepPositions
					.slice(0, -1)
					.reduce((prev, curr) => prev + curr);

				setPaddingBottom(sum);
			} catch (ex) {
				// Sometimes the if statement apparently doesn't catch everything..
				console.log("TODO: Fix this error! (Steps.js)", ex);
			}
		}
	}, [stepPositions]);

	return (
		<>
			{containerElem.current && (
				<containerElem.current>
					{steps.map((step, key) => {
						const Elem = step.alert ? Alert : Step;

						return (
							<Elem
								{...step}
								active={isStatic || activeIndex === key}
								onLayout={({ nativeEvent }) => {
									const { layout } = nativeEvent;
									let positions = [...stepPositions];
									positions[key] = layout.y;

									setStepPositions(positions);
								}}
								key={`step-${key}`}
							/>
						);
					})}
				</containerElem.current>
			)}

			{/* This is broken. Legacy */}

			{!isStatic && (
				<Control.Wrapper>
					<Control.Up onPress={handleUp} />
					<Control.Down onPress={handleDown} />
				</Control.Wrapper>
			)}
		</>
	);
};

import "./style.css";
import data from "./data.json";

/** ### VARIABLES ### */
const $time = document.querySelectorAll(".time") as NodeListOf<HTMLDivElement>,
	$freq = document.querySelectorAll(".frequence") as NodeListOf<HTMLSpanElement>,
	$currentSchedule = document.querySelectorAll(
		".schedule .time span"
	) as NodeListOf<HTMLSpanElement>,
	$pastSchedule = document.querySelectorAll(".schedule .time small") as NodeListOf<Element>,
	$task = document.querySelectorAll(".schedule  .text-gray-100") as NodeListOf<HTMLSpanElement>;

interface FrequenceInt {
	freq: NodeListOf<HTMLSpanElement>;
	task: NodeListOf<HTMLSpanElement>;
	pastTime: NodeListOf<Element>;
	currentTime: NodeListOf<HTMLSpanElement>;
}

/** ### INITIAL VALUES FOR WEEKLY */
$task.forEach((hour) => {
	let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //0
	$currentSchedule.item(task).textContent = `${data[task].timeframes.weekly.current}hrs`;
	$pastSchedule.item(
		task
	).textContent = `Last week - ${data[task].timeframes.weekly.previous}hrs`;
});

/**### HOVER ### */
const hoverElement = (data: NodeListOf<HTMLDivElement>) => {
	data.forEach((item) => {
		item.addEventListener("mouseover", () => {
			item.parentElement!.classList.add("work-bg");
		});

		item.addEventListener("mouseleave", () => {
			item.parentElement!.classList.remove("work-bg");
		});
	});
};

/** ### CURRENT SCHEDULE */
const showActive = (freqs: HTMLSpanElement) => {
	$freq.forEach((item) => {
		if (item.classList.contains("active")) item.classList.remove("active");
	});
	freqs.classList.add("active");
};

/**### TIME SCHEDULE FOR EACH FREQ ### */
const frequences = (datos: FrequenceInt) => {
	const { freq, task, currentTime, pastTime } = datos;
	freq.forEach((item) => {
		if (item.id === "daily") {
			item.addEventListener("click", () => {
				showActive(item);
				task.forEach((hour) => {
					let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //task's index
					currentTime.item(
						task
					).textContent = `${data[task].timeframes.daily.current}hrs`;
					pastTime.item(
						task
					).textContent = `Yesterday - ${data[task].timeframes.daily.previous}hrs`;
				});
			});
		} else if (item.id === "weekly") {
			item.addEventListener("click", () => {
				showActive(item);
				task.forEach((hour) => {
					let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //0
					currentTime.item(
						task
					).textContent = `${data[task].timeframes.weekly.current}hrs`;
					pastTime.item(
						task
					).textContent = `Last week - ${data[task].timeframes.weekly.previous}hrs`;
				});
			});
		} else if (item.id === "monthly") {
			item.addEventListener("click", () => {
				showActive(item);
				task.forEach((hour) => {
					let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //0
					currentTime.item(
						task
					).textContent = `${data[task].timeframes.monthly.current}hrs`;
					pastTime.item(
						task
					).textContent = `Last month - ${data[task].timeframes.monthly.previous}hrs`;
				});
			});
		}
	});
};

window.onload = () => {
	hoverElement($time);
	frequences({
		freq: $freq,
		task: $task,
		currentTime: $currentSchedule,
		pastTime: $pastSchedule,
	});
};

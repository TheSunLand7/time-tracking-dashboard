import "./style.css";
import data from "./data.json";

const $time = document.querySelectorAll(".time") as NodeListOf<HTMLDivElement>,
	//$day = document.querySelector("#daily") as HTMLSpanElement,
	//$week = document.querySelector("#weekly") as HTMLSpanElement,
	//$month = document.querySelector("#monthly") as HTMLSpanElement,
	$freq = document.querySelectorAll(".frequence") as NodeListOf<HTMLSpanElement>,
	$currentSchedule = document.querySelectorAll(
		".schedule .time span"
	) as NodeListOf<HTMLSpanElement>,
	$pastSchedule = document.querySelectorAll(".schedule .time small"),
	$task = document.querySelectorAll(".schedule  .text-gray-100");

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

/**### FREQUENCE FUNCTION ### */
const showActive = (freqs: HTMLSpanElement) => {
	$freq.forEach((item) => {
		if (item.classList.contains("active")) item.classList.remove("active");
	});
	freqs.classList.add("active");
};

const frequences = (freq: NodeListOf<HTMLSpanElement>) => {
	freq.forEach((item) => {
		if (item.id === "daily") {
			item.addEventListener("click", () => {
				showActive(item);
				//showData($currentSchedule, $pastSchedule);
				$task.forEach((hour) => {
					let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //0
					$currentSchedule.item(
						task
					).textContent = `${data[task].timeframes.daily.current}hrs`;
					$pastSchedule.item(
						task
					).textContent = `Last week - ${data[task].timeframes.daily.previous}hrs`;
				});
			});
		} else if (item.id === "weekly") {
			item.addEventListener("click", () => {
				showActive(item);
				//showData($currentSchedule, $pastSchedule);
				$task.forEach((hour) => {
					let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //0
					$currentSchedule.item(
						task
					).textContent = `${data[task].timeframes.weekly.current}hrs`;
					$pastSchedule.item(
						task
					).textContent = `Last week - ${data[task].timeframes.weekly.previous}hrs`;
				});
			});
		} else if (item.id === "monthly") {
			item.addEventListener("click", () => {
				showActive(item);
				//showData($currentSchedule, $pastSchedule);
				$task.forEach((hour) => {
					let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //0
					$currentSchedule.item(
						task
					).textContent = `${data[task].timeframes.monthly.current}hrs`;
					$pastSchedule.item(
						task
					).textContent = `Last week - ${data[task].timeframes.monthly.previous}hrs`;
				});
			});
		}
	});
};

/** ### SHOW DATA ### */
/*const showData = (current: NodeListOf<HTMLSpanElement>, past: NodeListOf<Element>) => {
	$task.forEach((hour) => {
		let task: number = data.map((item) => item.title).indexOf(hour.textContent!); //0
		current.item(task).textContent = `${data[task].timeframes.daily.current}hrs`;
		past.item(task).textContent = `Last week - ${data[task].timeframes.daily.previous}hrs`;
	});
};
*/
window.onload = () => {
	hoverElement($time);
	frequences($freq);
	//showData($currentSchedule, $pastSchedule);
};
console.log(data);

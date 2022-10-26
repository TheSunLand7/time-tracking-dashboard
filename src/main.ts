import "./style.css";
import data from "./data.json";

const $time = document.querySelectorAll(".time") as NodeListOf<HTMLDivElement>;

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

hoverElement($time);
//console.log(data);

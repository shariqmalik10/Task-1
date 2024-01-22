document.addEventListener("DOMContentLoaded", function () {
    // Get the central box and the first icon button
    const centralBox = document.getElementsByClassName("central-box");
    const firstIconButton = document.querySelector(".icons > div > button");

    // Create a line element
    const line = document.createElement("div");
    line.classList.add("line");

    // Append the line to the central box
    centralBox.appendChild(line);

    // Position the line to connect the central box to the first icon button
    positionLine(centralBox, firstIconButton, line);
});

// Function to position the line between two elements
function positionLine(startElement, endElement, lineElement) {
    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();

    const startX = startRect.left + startRect.width / 2;
    const startY = startRect.top + startRect.height / 2;

    const endX = endRect.left + endRect.width / 2;
    const endY = endRect.top + endRect.height / 2;

    const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    const angle = Math.atan2(endY - startY, endX - startX);

    const transformValue = `translate(-50%, -50%) rotate(${angle}rad)`;

    lineElement.style.width = `${distance}px`;
    lineElement.style.transform = transformValue;
    lineElement.style.left = `${startX}px`;
    lineElement.style.top = `${startY}px`;
}
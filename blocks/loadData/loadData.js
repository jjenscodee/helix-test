export default function decorate(block) {
  // Create table element
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  async function fetchAndPopulateTable() {
    try {
      const response = await fetch('/data.json', {
        mode: 'no-cors',
      });
      const data = await response.json();

      // Create header row
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      ['Source', 'Destination', 'Rate'].forEach((headerText) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = '1px solid black';
        th.style.padding = '8px';
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Create table body
      const tbody = document.createElement('tbody');
      data.data.forEach((item) => {
        const row = document.createElement('tr');
        [item.source, item.destination, item.rate].forEach((text) => {
          const td = document.createElement('td');
          td.textContent = text;
          td.style.border = '1px solid black';
          td.style.padding = '8px';
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);

      // Clear the block and append the table
      block.textContent = '';
      block.appendChild(table);
    } catch (error) {
    //   console.error('Error:', error);
      block.textContent = 'Error loading data. Please try again later.';
    }
  }

  // Call the function to fetch and populate data
  fetchAndPopulateTable();
}

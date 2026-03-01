// Seed data for Opit Traders
const seedData = {
  labels: ["Bean Seed", "Maize", "Soya Bean", "Sunflower", "Millets"],
  datasets: [{
    label: "Seed Distribution (kg)",
    data: [120, 200, 150, 80, 100], // Example values
    backgroundColor: [
      "#4caf50", // Bean Seed
      "#ff9800", // Maize
      "#2196f3", // Soya Bean
      "#f44336", // Sunflower
      "#9c27b0"  // Millets
    ],
    borderColor: "#fff",
    borderWidth: 2
  }]
};

// Chart configuration
const config = {
  type: "pie", // Try "bar" or "doughnut" too
  data: seedData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: "Seed Distribution in Opit Traders",
        font: {
          size: 18
        }
      }
    }
  }
};

// Render chart
window.onload = () => {
  const ctx = document.getElementById("seedChart").getContext("2d");
  new Chart(ctx, config);
};

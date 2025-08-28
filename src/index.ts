import { helloPromise } from './bai1';
import { finallyPromise } from './bai10';
import { getTen } from './bai2';
import { rejectError } from './bai3';
import { randomPromise } from './bai4';
import { simulateTask } from './bai5';
import { parallelTasks } from './bai6';
import { raceTasks } from './bai7';
import { chainPromise } from './bai8';
import { filterEven } from './bai9';

async function main() {

    // Bai 1
  console.log('Bai 1:');
  await helloPromise.then((result) => console.log(result));

  // Bai 2
  console.log('Bai 2:');
  await getTen().then((result) => console.log(result));

  // Bai 3
  console.log('Bai 3:');
  try {
    await rejectError();
  } catch (error) {
    console.log('Error:', error);
  }

  // Bai 4
  console.log('Bai 4:');
  await randomPromise.then((result) => console.log(result)).catch((error) => console.error(error));

  // Bai 5
  console.log('Bai 5:');
  await simulateTask(1000).then((result) => console.log(result));

  // Bai 6
  console.log('Bai 6:');
  await parallelTasks.then((results) => console.log(results));

  // Bai 7
  console.log('Bai 7:');
  await raceTasks.then((result) => console.log(result));

  // Bai 8
  console.log('Bai 8:');
  await chainPromise.then((result) => console.log(result));

  // Bai 9
  console.log('Bai 9:');
  await filterEven.then((result) => console.log(result));

  // Bai 10
  console.log('Bai 10:');
  await finallyPromise.then((result) => console.log(result));
}

main().catch((error) => console.error("Main error:", error));
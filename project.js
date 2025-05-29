// Accordion for heart medical tests
const tests = [
  {
    title: 'Coronary angiogram',
    content: `A coronary angiogram is a test that uses X-rays and a special dye to take pictures of the vessels that supply blood to the heart. The test produces real-time, moving images which show your blood moving and heart pumping. This can show if, where and how much your heart’s arteries are narrowed or blocked. It also shows how well your heart muscle is pumping and whether the valves in your heart are working as they should.<br><br>The test is sometimes called cardiac catheterisation.`
  },
  {
    title: 'Computed tomography coronary angiogram (CTCA)',
    content: `This is a type of computed tomography (CT) scan that gives a 3-dimensional image of the heart chambers and coronary arteries supplying blood to the heart. A special dye is injected into a vein, and the CT scanner takes a series of pictures. It is a non-invasive test that is used to help diagnose coronary artery disease.`
  },
  {
    title: 'Blood tests',
    content: `Blood tests can measure the levels of substances in your blood to show if your heart has been damaged or if you are at risk of cardiovascular disease. A needle is inserted into a vein, usually in the inside of your elbow and blood collected. This blood is then sent to a laboratory to measure the amount of the relevant substances. The most common substances that are tested for are troponin and cholesterol.`
  },
  {
    title: 'Blood pressure monitoring',
    content: `Blood pressure is the pressure of your blood on the walls of your arteries as your heart pumps it around your body. High blood pressure is one of the main risk factors for heart disease, especially heart attacks and strokes.<br><br>Your GP can measure your blood pressure, but for a more complete picture, they may arrange for you to wear a blood pressure monitor for 24 hours (during day-to-day activity and sleep). This light-weight, easy to wear monitor will help your doctor get accurate information about your blood pressure.`
  },
  {
    title: 'Chest X-ray',
    content: `Using an X-ray, pictures are taken of the structure and organs inside your chest, like your heart, lungs and blood vessels.<br><br>A chest X-ray can help your doctor see if your heart is in an unusual shape or size. It can help confirm a valve disorder and is useful for diagnosing heart failure or an enlargement of the heart, called cardiomyopathy.`
  },
  {
    title: 'Echocardiogram (heart ultrasound)',
    content: `An echocardiogram is a common test. It gives a picture of your heart using ultrasound. It uses a probe that is placed either on your chest or sometimes into your oesophagus (throat).<br><br>It helps your doctor check if there are any problems with your heart’s valves and chambers and see how strongly your heart pumps blood.<br><br>An echocardiogram performed before and after exercise is also used to detect areas of the heart where the blood supply through the coronary arteries to the heart muscle is reduced (see stress tests below).`
  },
  {
    title: 'Electrocardiogram (ECG)',
    content: `An ECG reads your heart's electrical impulses. Small sticky dots and wire leads are put on your chest, arms and legs. The leads are attached to an ECG machine which records the electrical impulses and prints them out on paper.<br><br>Your doctor may use an ECG to diagnose a heart attack or abnormal heart rhythms (called 'arrhythmias').`
  },
  {
    title: 'Electrophysiology studies',
    content: `Electrophysiology studies use a computer to help find out more about an abnormal heartbeat (arrhythmia).<br><br>Special tubes (catheters) are inserted, via a vein in your leg, into your heart. The catheters record your heart's electrical activity and test its response to various stimuli. Your heart's electrical response to these stimuli helps doctors to determine the type and cause of your arrhythmia.`
  },
  {
    title: 'Magnetic resonance imaging (MRI)',
    content: `An MRI uses very strong magnets and radio waves to create detailed images of your heart on a computer. It can take still or moving pictures of your heart. It does not involve radiation and the main thing you will notice is a drumming noise while the scanning is being done.<br><br>Sometimes a special dye is used to make parts of the heart and coronary arteries easier to see.<br><br>This test shows your doctor the structure of your heart and how well it is working, so they can decide the best treatment for you.`
  },
  {
    title: 'Stress tests',
    content: `Stress tests help to find out how well your heart works when you're under stress. The stress can be either when you are physically active (e.g. using an exercise machine like a treadmill) or using medicine (e.g. dobutamine).<br><br>During the test, your heart rate, heart rhythm and blood pressure will be monitored. This is done using an ECG, or sometimes an echocardiogram.`
  },
  {
    title: 'Nuclear cardiac stress test',
    content: `This test is sometimes called:<ul style="margin-top:10px; margin-bottom:10px;">
      <li>myocardial perfusion imaging test or myocardial perfusion scan</li>
      <li>exercise thallium scan</li>
      <li>dual isotope treadmill test</li>
      <li>exercise nuclear scan.</li>
    </ul>A healthcare provider can use two different imaging techniques for this test: positron emission tomography (PET) or single-photon emission computed tomography (SPECT).<br><br>
    A tiny dose of a radioactive substance called a 'tracer' is injected into your bloodstream. It goes to your heart and releases energy. Special cameras take a picture of this energy from outside your body.<br><br>
    Your doctor uses this picture to see how much blood flows to your heart muscle and how well your heart pumps blood when you are resting and doing physical activity. This test also helps your doctor to see if your heart muscle is damaged.`
  },
  {
    title: 'Tilt tests',
    content: `Doctors use tilt tests to see whether different body positions will trigger an abnormal heartbeat (arrhythmia). In the test, you are strapped onto a table that can be moved to change the direction of your body from a standing position to lying flat. They're especially useful for investigating the hearts of people who faint without an obvious cause.`
  },
  {
    title: 'References',
    content: `<ol style="margin-left:1.3em; padding-left:0.6em;">
      <li>Brieger D, Cullen L, Briffa T, et al. National Heart Foundation of Australia & Cardiac Society of Australia and New Zealand: Australian clinical guideline for diagnosing and managing acute coronary syndromes 2024. Heart, Lung & Circulation. In press.</li>
      <li>British Heart Foundation. Tests for heart and circulatory conditions. nd. Accessed 9 January 2025. <a href="https://www.bhf.org.uk/informationsupport/tests" target="_blank" rel="noopener">www.bhf.org.uk/informationsupport/tests</a></li>
    </ol>`
  }
];

document.addEventListener('DOMContentLoaded', function () {
  // Accordion setup
  const accordion = document.getElementById('accordion');
  if (accordion) {
    tests.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'accordion-item';
      div.innerHTML = `
        <h4 class='accordion-header'>
          <button class='accordion-btn' aria-expanded='${idx === 0 ? 'true' : 'false'}'>${item.title}</button>
        </h4>
        <div class='accordion-panel${idx === 0 ? " open" : ""}'>${item.content}</div>
      `;
      accordion.appendChild(div);
    });
    document.querySelectorAll('.accordion-btn').forEach((btn, idx) => {
      btn.addEventListener('click', function () {
        const panel = btn.parentNode.nextElementSibling;
        const open = btn.classList.contains('active');
        document.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('open'));
        if (!open) {
          btn.classList.add('active');
          panel.classList.add('open');
        }
      });
    });
  }

  // Prediction tool
  var predictionForm = document.getElementById('predictionForm');
  if(predictionForm) {
    predictionForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const age = parseInt(document.getElementById('age').value);
      const gender = parseInt(document.getElementById('gender').value);
      const chestPain = parseInt(document.getElementById('chestPain').value);
      const bloodPressure = parseInt(document.getElementById('bloodPressure').value);
      const cholesterol = parseInt(document.getElementById('cholesterol').value);

      const prediction = predictHeartDisease(age, gender, chestPain, bloodPressure, cholesterol);

      const resultDiv = document.getElementById('result');
      resultDiv.textContent = prediction === 1 ? "High Risk of Heart Disease" : "Low Risk of Heart Disease";
      resultDiv.style.color = prediction === 1 ? "red" : "green";
    });
  }
});

function predictHeartDisease(age, gender, chestPain, bloodPressure, cholesterol) {
  if (age > 50 && cholesterol > 240 && chestPain > 1) {
    return 1; // High risk
  } else {
    return 0; // Low risk
  }
}
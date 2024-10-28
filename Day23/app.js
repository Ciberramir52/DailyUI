// Current step index
let currentStep = 1;

// Function to move to the next step
function nextStep() {
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    const nextStepElement = document.getElementById(`step-${currentStep + 1}`);
    const progressStep = document.getElementsByClassName('step')[currentStep];

    currentStepElement.classList.add('hidden');
    nextStepElement.classList.remove('hidden');
    progressStep.classList.add('active');

    currentStep++;
}

// Function to complete onboarding
function completeOnboarding() {
    alert('Onboarding Complete! Redirecting to your dashboard...');
    // You can add a redirect to a dashboard or home page after completion.
    window.location.href = "/dashboard";
}

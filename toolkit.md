## Get an SSH machine with the Element AI Toolkit

### Expected Outcome

By the end of these guidelines, you will have successfully:
- Created an account and established an admin role for your Element AI Toolkit.
- Set up an interactive job that you can SSH into, with the desired number of CPUs and GPUs allocated.

## Table of Contents
- [Step 1: Log into Element AI Console](#step-1-log-into-element-ai-console)
- [Step 2: Install the CLI and Log In](#step-2-install-the-cli-and-log-in)
- [Step 3: Create an Account and Admin Role](#step-3-create-an-account-and-admin-role)
- [Step 4: Configure Your Machine](#step-4-configure-your-machine)
- [Step 5: Run the Interactive Job](#step-5-run-the-interactive-job)

---


### <a name="step-1-log-into-element-ai-console"></a>Step 1: Log into Element AI Console
1. Go to [Element AI Console](https://console.elementai.com/apps/overview).
2. Log in with your credentials.

### <a name="step-2-install-the-cli-and-log-in"></a>Step 2: Install the CLI and Log In

Run the following commands to install the Element AI CLI and log in to your account:

```sh
# Download latest Toolkit binary, make it executable, and add it to PATH
curl https://console.elementai.com/cli/install | sh
chmod +x ./eai
mv eai [directory in your PATH]

# Upgrade to the latest version and check version
eai upgrade
eai --version

# Log in
eai login
```

This consolidated code includes all the necessary steps to download the Toolkit binary, make it executable, add it to the PATH, upgrade to the latest version, check the version, and finally log in to your Element AI account.

### <a name="step-3-create-an-account-and-admin-role"></a>Step 3: Create an Account and Admin Role

- First, come up with a username (which could be your Github handle) and replace every instance of `<username>` for the rest of the guidelines.
- Second, identify your `<org>`'s name with this command `eai account get --no-header --fields organization| head -n 1` and replace every instance of `<org>` with that name.

- Run the following commands to create an account and an admin role for your Element AI Toolkit:

```sh
# Create an account and an admin role
python setup_account.py -a <org>.<username>
eai role new <org>.<username>.admin
```

This combined code performs both tasks: creating an account using the provided script and creating an admin role using the Element AI CLI.

### <a name="step-4-configure-your-machine"></a>Step 4: Configure Your Machine
1. Navigate to the `configs` directory:
   ```sh
   cd configs
   vim <username>.yml
   ```

2. Inside `<username>.yml`, copy the content below, replacing `<username>` and `<org>` with your account details from `eai account ls`:

   ```sh
   image: registry.console.elementai.com/snow.colab_public/cuda
   data:
       - <org>.<username>.home:/mnt/home
       - snow.colab_public.data:/mnt/colab_public
   resources:
       cpu: 2
       mem: 16
       gpu: 1
       gpuMem: 12
   interactive: true
   command:
       - /tk/bin/start.sh
       - /bin/bash
       - -c
       - jupyter notebook --notebook-dir='/mnt' --ip=0.0.0.0 --port=8080 --no-browser --NotebookApp.token='' --NotebookApp.custom_display_url=https://${EAI_JOB_ID}.job.console.elementai.com --NotebookApp.disable_check_xsrf=True --NotebookApp.allow_origin='*'
   ```

### <a name="step-5-run-the-interactive-job"></a>Step 5: Run the Interactive Job

- **Access Needed**: ask one of the toolkit users to give you access to `snow.colab_public` with this command and send them your toolkit email

```
eai role member add snow.colab_public.admin --user <your_email>
```

1. Start the interactive job:

   ```sh
   cd ..
   python ssh_start.py -r <org>.<username>.admin -p configs/<username>.yml
   ```

   - If it's QUEUEING, it's searching for resources.
   - If it's QUEUED, it's building the docker after finding resources.
   - If it's RUNNING, congratulations!

3. Forward the job ID for tunneling:
   
   - After your job starts running, it will be assigned a unique job ID.
   - This job ID is crucial for SSH tunneling. Make sure to forward this job ID to your local machine with the following two commands.
     
   
   ```sh
   JOBID=$(eai job ls --state alive --fields id,interactive | grep true | awk '{print $1}')

   eai job port-forward $JOBID 2222
   ```


   - This forwarding process will run indefinitely in your terminal, showing logs as it works.
   - The terminal will show "connected" once the tunneling is ready. 

5. Connect via SSH through the Terminal:
   Open a new Terminal and run the following command:
   ```sh
   ssh -A -p 2222 toolkit@localhost -v
   ```

   - You are now in your Toolkit machine
   - Navigate to `/mnt/home/` to make sure it exists
      - It is your private folder. Consider having `projects` and `results` folders there.
   - Navigate to `/mnt/colab_public` to make sure it also exists
      - It contains shared public datasets.


### Congratulations on successfully setting up your SSH machine with the Element AI Toolkit!

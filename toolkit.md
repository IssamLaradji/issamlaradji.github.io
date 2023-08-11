Toolkit 


Step 1:

Log into https://console.elementai.com/apps/overview

Step 2:

Install the CLI

# download latest Toolkit binary
curl https://console.elementai.com/cli/install | sh

# make it executable
chmod +x ./eai

# add eai executable to your PATH
mv eai [directory which is in your PATH]

# upgrade to the latest version
eai upgrade

# version information
eai --version


Step 3:

Download this zip file that contains the commands for launching the interactive job

https://www.dropbox.com/scl/fi/ewsk2ouhby0lsl9ht45tw/research-toolkit-support-master.zip?rlkey=ge8n0pcoyoy7zdhn7qy9chiml&dl=0


Step 4:

# Extract the zip file
unzip research-toolkit-support-master.zip 

# Cd into it
cd  research-toolkit-support-master 


# Create an account, replace <username> with any name, best to simply use your first name or github handl

python setup_account.py -a snow.<username>

# Create an admin role
eai role new snow.<username>.admin

# Copy public.yml to <username>.yml and modify its contents by specifying the machine stats that you want

cd configs
cp public.yml <username>.yml
vim <username>.yml

# Run he interactive job
cd ..
python ssh_start.py -r snow.<username>.admin -p configs/<username>.yml

# After the job is launched you will get a job_id, use that id and forward the job below
eai job port-forward <job_id> 2222


# Open a new terminal and do
ssh -A -p 2222 toolkit@localhost -v


# Open a VSCode and install SSH Extension and login into the workstation with the following command
ssh -A -p 2222 toolkit@localhost -v



Step 5:

Install Python environment

cd /mnt/home

wget -o miniconda.sh https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh 
bash Miniconda3-latest-Linux-x86_64.sh -b -p miniconda 

miniconda/bin/conda install -y python=3.8
miniconda/bin/conda clean -ya


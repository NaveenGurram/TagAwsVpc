
    // this is where we get the UserName from the AWS
    var userDetails = $('#nav-usernameMenu > div.nav-elt-label').text();
    //  finra-awsprod
    //  finra-awsqc
    var env = "DEV";
    if (userDetails.indexOf('finra-awsprod') > 0) {
        env = "PROD"
    } else if (userDetails.indexOf('finra-awsqc') > 0) {
        env = "QC";
    }else if (userDetails.indexOf('finra-awsdev') > 0) {
        env = "DEV";
    } 

    //<div title="priv_aws_cdip_dev_d/K24425 @ finra-awsdev" class="nav-elt-label">priv_aws_cdip_dev_d/K24425 @ finra-awsdev</div>

    // now based on env put up a banner.
    $('#awsgnav').before("<div class='identityBanner'> You are in " + env + " VPC <br> You logged in as " + userDetails + "</div>");



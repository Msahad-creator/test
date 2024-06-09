<script>
    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwgjluEs-qW0lBD1--F5u7GtPhBnrvx9sm9OZqvMYM-081A2LvmpFPPGXMt1tCeD9APJA/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
            }
        })
    })
</script>

// @scope: error
sub test_vcl {
    testing.call_subroutine("generate_response");
    assert.equal(testing.synthetic_body, "No dice.");
}

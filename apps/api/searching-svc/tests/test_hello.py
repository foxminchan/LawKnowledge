"""Hello unit test module."""

from searching_svc.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello searching-svc"
